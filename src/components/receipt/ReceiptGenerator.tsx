import { Order } from '@/types';
import { Download, Receipt } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface ReceiptGeneratorProps {
  order: Order;
}

const ReceiptGenerator = ({ order }: ReceiptGeneratorProps) => {
  const { toast } = useToast();

  const generateQRCode = (text: string) => {
    // Simple QR code generation using a service
    return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
  };

  const generateReceipt = async () => {
    try {
      console.log('Starting receipt generation for order:', order);
      
      // Show loading state
      toast({
        title: "Generating receipt...",
        description: "Please wait while we create your PDF receipt.",
      });

      // Check if order data is valid
      if (!order || !order.id) {
        throw new Error('Invalid order data');
      }

      // Dynamic import to avoid SSR issues
      console.log('Importing jsPDF...');
      const jsPDF = (await import('jspdf')).default;
      console.log('Importing html2canvas...');
      const html2canvas = (await import('html2canvas')).default;
      console.log('Libraries imported successfully');

      // Create QR code data
      const qrData = JSON.stringify({
        orderId: order.id,
        total: order.total,
        customer: order.orderDetails.name,
        date: new Date().toISOString()
      });

      // Create receipt content
      const receiptContent = document.createElement('div');
      receiptContent.style.position = 'absolute';
      receiptContent.style.left = '-9999px';
      receiptContent.style.top = '0';
      receiptContent.style.width = '500px';
      receiptContent.style.backgroundColor = 'white';
      receiptContent.style.padding = '30px';
      receiptContent.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
      receiptContent.style.color = '#333';
      receiptContent.style.overflow = 'visible';
      
      // Add CSS to ensure colors are preserved
      const style = document.createElement('style');
      style.setAttribute('data-receipt-style', 'true');
      style.textContent = `
        * {
          color: inherit !important;
          background-color: inherit !important;
        }
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
        }
        .gradient-pink {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%) !important;
        }
        .gradient-cyan {
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%) !important;
        }
        .gradient-orange {
          background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%) !important;
        }
        .gradient-red {
          background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%) !important;
        }
      `;
      document.head.appendChild(style);

      receiptContent.innerHTML = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 30px; max-width: 500px; background: #8B5CF6; color: #333;">
          <!-- Header with solid color background -->
          <div style="text-align: center; background: #8B5CF6; color: white; padding: 30px; border-radius: 15px; margin-bottom: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <h1 style="color: white; margin: 0; font-size: 36px; font-weight: 700; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">Heer Hoop</h1>
            <p style="color: #E0E7FF; margin: 8px 0; font-size: 18px; font-style: italic;">Handmade with Love & Care</p>
            <div style="display: inline-block; background: rgba(255,255,255,0.2); color: white; padding: 10px 25px; border-radius: 25px; font-size: 16px; font-weight: 600; margin-top: 15px; backdrop-filter: blur(10px);">
              ✨ RECEIPT ✨
            </div>
          </div>
          
          <!-- Order Information with solid color -->
          <div style="background: #EC4899; padding: 25px; border-radius: 15px; margin-bottom: 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
            <h3 style="margin: 0 0 15px 0; color: white; font-size: 20px; font-weight: 600;">📋 Order Information</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <div>
                <p style="margin: 5px 0; font-size: 14px;"><strong style="color: #F0F0F0;">Order ID:</strong><br><span style="color: white; font-weight: 600; font-size: 16px;">${order.id}</span></p>
                <p style="margin: 5px 0; font-size: 14px;"><strong style="color: #F0F0F0;">Date:</strong><br><span style="color: white;">${new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span></p>
              </div>
              <div>
                <p style="margin: 5px 0; font-size: 14px;"><strong style="color: #F0F0F0;">Time:</strong><br><span style="color: white;">${new Date().toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: true 
                })}</span></p>
                <p style="margin: 5px 0; font-size: 14px;"><strong style="color: #F0F0F0;">Status:</strong><br><span style="color: #4ADE80; font-weight: 600; text-transform: capitalize;">✅ ${order.status}</span></p>
              </div>
            </div>
          </div>
          
          <!-- Customer Information with solid color -->
          <div style="background: #06B6D4; padding: 25px; border-radius: 15px; margin-bottom: 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
            <h3 style="margin: 0 0 15px 0; color: white; font-size: 20px; font-weight: 600;">👤 Customer Information</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <div>
                <p style="margin: 5px 0; font-size: 14px;"><strong style="color: #E0F2FE;">Name:</strong><br><span style="color: white; font-weight: 600; font-size: 16px;">${order.orderDetails.name}</span></p>
                <p style="margin: 5px 0; font-size: 14px;"><strong style="color: #E0F2FE;">Phone:</strong><br><span style="color: white;">📞 ${order.orderDetails.phone}</span></p>
              </div>
              <div>
                <p style="margin: 5px 0; font-size: 14px;"><strong style="color: #E0F2FE;">Delivery Date:</strong><br><span style="color: white;">📅 ${order.orderDetails.deliveryDate ? new Date(order.orderDetails.deliveryDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                }) : 'Not specified'}</span></p>
              </div>
            </div>
            <div style="margin-top: 15px;">
              <p style="margin: 5px 0; font-size: 14px;"><strong style="color: #E0F2FE;">Shipping Address:</strong><br><span style="color: white;">📍 ${order.orderDetails.address}</span></p>
            </div>
          </div>
          
          <!-- Order Items with product images -->
          <div style="margin-bottom: 25px;">
            <h3 style="margin: 0 0 15px 0; color: #374151; font-size: 20px; font-weight: 600;">🛍️ Order Items</h3>
            <div style="border: 2px solid #E5E7EB; border-radius: 12px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
              ${order.items.map((item, index) => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px; ${index !== order.items.length - 1 ? 'border-bottom: 2px solid #E5E7EB;' : ''} background: ${index % 2 === 0 ? '#FFFFFF' : '#F9FAFB'};">
                  <div style="display: flex; align-items: center; flex: 1;">
                    <div style="width: 60px; height: 60px; border-radius: 8px; overflow: hidden; margin-right: 15px; border: 2px solid #E5E7EB;">
                      <img src="${item.product.image}" alt="${item.product.name}" style="width: 100%; height: 100%; object-fit: cover;" />
                    </div>
                    <div style="flex: 1;">
                      <p style="margin: 0 0 5px 0; font-size: 16px; font-weight: 600; color: #374151;">${item.product.name}</p>
                      <p style="margin: 0; font-size: 14px; color: #6B7280;">Quantity: ${item.quantity} × $${item.product.price.toFixed(2)} each</p>
                    </div>
                  </div>
                  <div style="text-align: right;">
                    <p style="margin: 0; font-size: 18px; font-weight: 600; color: #8B5CF6;">$${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          
          <!-- Order Summary with solid color -->
          <div style="background: #F59E0B; padding: 25px; border-radius: 15px; margin-bottom: 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
            <h3 style="margin: 0 0 15px 0; color: white; font-size: 20px; font-weight: 600;">💰 Order Summary</h3>
            <div style="space-y: 10px;">
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.3);">
                <span style="color: #FEF3C7; font-size: 14px;">Subtotal:</span>
                <span style="color: white; font-weight: 600;">$${(order.total / 1.08).toFixed(2)}</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.3);">
                <span style="color: #FEF3C7; font-size: 14px;">Tax (8%):</span>
                <span style="color: white; font-weight: 600;">$${((order.total / 1.08) * 0.08).toFixed(2)}</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.3);">
                <span style="color: #FEF3C7; font-size: 14px;">Shipping:</span>
                <span style="color: #4ADE80; font-weight: 600;">🆓 Free</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 15px 0; border-top: 3px solid white; margin-top: 15px; background: rgba(255,255,255,0.1); border-radius: 8px; padding: 15px;">
                <span style="color: white; font-size: 20px; font-weight: 700;">Total:</span>
                <span style="color: white; font-size: 24px; font-weight: 700;">$${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <!-- Payment Information with solid color -->
          <div style="background: #EF4444; padding: 25px; border-radius: 15px; margin-bottom: 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
            <h3 style="margin: 0 0 15px 0; color: white; font-size: 20px; font-weight: 600;">💳 Payment Information</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <div>
                <p style="margin: 5px 0; font-size: 14px;"><strong style="color: #FEE2E2;">Payment Method:</strong><br><span style="color: white; font-weight: 600;">💵 Cash on Delivery</span></p>
              </div>
              <div>
                <p style="margin: 5px 0; font-size: 14px;"><strong style="color: #FEE2E2;">Payment Status:</strong><br><span style="color: #FCD34D; font-weight: 600;">⏳ Pending</span></p>
              </div>
            </div>
          </div>
          
          <!-- QR Code Section with solid color -->
          <div style="background: #10B981; padding: 25px; border-radius: 15px; margin-bottom: 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); text-align: center;">
            <h3 style="margin: 0 0 15px 0; color: white; font-size: 20px; font-weight: 600;">📱 Scan for Order Details</h3>
            <div style="display: flex; justify-content: center; margin-bottom: 15px;">
              <img src="${generateQRCode(qrData)}" alt="QR Code" style="width: 120px; height: 120px; border-radius: 8px; border: 3px solid white; box-shadow: 0 5px 15px rgba(0,0,0,0.2);" />
            </div>
            <p style="margin: 0; font-size: 12px; color: #D1FAE5;">Scan this QR code to view order details online</p>
          </div>
          
          <!-- Footer with solid color -->
          <div style="text-align: center; padding-top: 25px; border-top: 3px solid #E5E7EB; margin-top: 25px; background: #8B5CF6; border-radius: 15px; padding: 25px; color: white;">
            <div style="margin-bottom: 20px;">
              <h4 style="margin: 0 0 10px 0; color: white; font-size: 18px; font-weight: 600;">🎉 Thank you for your purchase!</h4>
              <p style="margin: 5px 0; font-size: 14px; color: #E0E7FF;">We'll contact you soon to confirm your order and delivery details.</p>
            </div>
            
            <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px; border-left: 4px solid #F59E0B; margin-bottom: 20px; backdrop-filter: blur(10px);">
              <p style="margin: 0; font-size: 13px; color: white; font-weight: 500;">
                ⚠️ <strong>Important:</strong> Please have the exact amount ready for cash on delivery. 
                We'll call you 30 minutes before delivery to confirm.
              </p>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; text-align: left; margin-top: 20px;">
              <div>
                <h5 style="margin: 0 0 8px 0; color: white; font-size: 14px; font-weight: 600;">📞 Contact Us</h5>
                <p style="margin: 3px 0; font-size: 12px; color: #E0E7FF;">Phone: +1 (555) 123-4567</p>
                <p style="margin: 3px 0; font-size: 12px; color: #E0E7FF;">Email: hello@heerhoop.com</p>
                <p style="margin: 3px 0; font-size: 12px; color: #E0E7FF;">Website: www.heerhoop.com</p>
              </div>
              <div>
                <h5 style="margin: 0 0 8px 0; color: white; font-size: 14px; font-weight: 600;">🕒 Business Hours</h5>
                <p style="margin: 3px 0; font-size: 12px; color: #E0E7FF;">Mon-Fri: 9:00 AM - 6:00 PM</p>
                <p style="margin: 3px 0; font-size: 12px; color: #E0E7FF;">Sat: 10:00 AM - 4:00 PM</p>
                <p style="margin: 3px 0; font-size: 12px; color: #E0E7FF;">Sun: Closed</p>
              </div>
            </div>
            
            <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.2);">
              <p style="margin: 5px 0; font-size: 12px; color: #E0E7FF;">
                This is an official receipt from Heer Hoop. Please keep this for your records.
              </p>
              <p style="margin: 5px 0; font-size: 12px; color: #E0E7FF;">
                Receipt generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      `;

      console.log('Receipt content created, adding to DOM...');
      // Add to DOM temporarily
      document.body.appendChild(receiptContent);

      try {
        console.log('Converting to canvas...');
        // Convert to canvas
        const canvas = await html2canvas(receiptContent, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          width: 500,
          height: receiptContent.scrollHeight,
          logging: false,
          removeContainer: true,
          imageTimeout: 0,
          foreignObjectRendering: true,
          ignoreElements: (element) => false,
          onclone: (clonedDoc) => {
            // Force color preservation by setting inline styles
            const allElements = clonedDoc.querySelectorAll('*');
            allElements.forEach(el => {
              const computedStyle = window.getComputedStyle(el);
              
              // Force color preservation
              if (computedStyle.color && computedStyle.color !== 'rgba(0, 0, 0, 0)') {
                (el as HTMLElement).style.setProperty('color', computedStyle.color, 'important');
              }
              if (computedStyle.backgroundColor && computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)') {
                (el as HTMLElement).style.setProperty('background-color', computedStyle.backgroundColor, 'important');
              }
              if (computedStyle.background && computedStyle.background !== 'none') {
                (el as HTMLElement).style.setProperty('background', computedStyle.background, 'important');
              }
              
              // Force gradient preservation
              if (computedStyle.backgroundImage && computedStyle.backgroundImage !== 'none') {
                (el as HTMLElement).style.setProperty('background-image', computedStyle.backgroundImage, 'important');
              }
            });
          }
        });

        console.log('Canvas created, generating PDF...');
        // Create PDF
        const imgData = canvas.toDataURL('image/png', 1.0);
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
          heightLeft -= pageHeight;
        }

        console.log('PDF created, downloading...');
        // Download PDF
        pdf.save(`receipt-${order.id}.pdf`);

        // Success message
        toast({
          title: "Receipt downloaded!",
          description: `Your receipt has been saved as receipt-${order.id}.pdf`,
        });
        
        console.log('Receipt download completed successfully');
      } finally {
        // Clean up
        if (document.body.contains(receiptContent)) {
          document.body.removeChild(receiptContent);
        }
        // Remove the style element
        const styleElement = document.querySelector('style[data-receipt-style]');
        if (styleElement) {
          styleElement.remove();
        }
      }
    } catch (error) {
      console.error('Error generating receipt:', error);
      toast({
        title: "Failed to generate receipt",
        description: error instanceof Error ? error.message : "Please try again or contact support if the problem persists.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="card-product">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Receipt className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Receipt</h3>
        </div>
        
        <div className="space-y-3 mb-4">
          <p className="text-sm text-muted-foreground">
            Download a copy of your receipt for your records.
          </p>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Order #{order.id}</Badge>
            <Badge variant="outline">${order.total.toFixed(2)}</Badge>
          </div>
        </div>
        
        <Button 
          onClick={generateReceipt}
          className="w-full"
          variant="outline"
        >
          <Download className="h-4 w-4 mr-2" />
          Download Receipt (PDF)
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReceiptGenerator; 