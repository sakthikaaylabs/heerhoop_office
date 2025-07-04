import { Order } from '@/types';
import { Download, Receipt } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ReceiptGeneratorProps {
  order: Order;
}

const ReceiptGenerator = ({ order }: ReceiptGeneratorProps) => {
  const generateReceipt = async () => {
    try {
      // Dynamic import to avoid SSR issues
      const jsPDF = (await import('jspdf')).default;
      const html2canvas = (await import('html2canvas')).default;

      // Create receipt content
      const receiptContent = document.createElement('div');
      receiptContent.innerHTML = `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 400px; background: white;">
          <div style="text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 20px;">
            <h1 style="color: #333; margin: 0; font-size: 24px;">Heer Hoop</h1>
            <p style="color: #666; margin: 5px 0; font-size: 14px;">Handmade with Love</p>
            <p style="color: #666; margin: 5px 0; font-size: 12px;">Receipt</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 5px 0; font-size: 14px;"><strong>Order ID:</strong> ${order.id}</p>
            <p style="margin: 5px 0; font-size: 14px;"><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
            <p style="margin: 5px 0; font-size: 14px;"><strong>Time:</strong> ${new Date().toLocaleTimeString()}</p>
          </div>
          
          <div style="border-bottom: 1px solid #ccc; padding-bottom: 15px; margin-bottom: 15px;">
            <h3 style="margin: 0 0 10px 0; color: #333;">Customer Information</h3>
            <p style="margin: 5px 0; font-size: 14px;"><strong>Name:</strong> ${order.orderDetails.name}</p>
            <p style="margin: 5px 0; font-size: 14px;"><strong>Phone:</strong> ${order.orderDetails.phone}</p>
            <p style="margin: 5px 0; font-size: 14px;"><strong>Address:</strong> ${order.orderDetails.address}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0; color: #333;">Order Items</h3>
            ${order.items.map(item => `
              <div style="display: flex; justify-content: space-between; margin: 8px 0; padding: 5px 0; border-bottom: 1px solid #eee;">
                <div style="flex: 1;">
                  <p style="margin: 0; font-size: 14px; font-weight: bold;">${item.product.name}</p>
                  <p style="margin: 0; font-size: 12px; color: #666;">Qty: ${item.quantity} × $${item.product.price}</p>
                </div>
                <div style="text-align: right;">
                  <p style="margin: 0; font-size: 14px; font-weight: bold;">$${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            `).join('')}
          </div>
          
          <div style="border-top: 2px solid #333; padding-top: 15px;">
            <div style="display: flex; justify-content: space-between; font-size: 16px; font-weight: bold;">
              <span>Total:</span>
              <span>$${order.total.toFixed(2)}</span>
            </div>
          </div>
          
          <div style="margin-top: 20px; text-align: center; padding-top: 20px; border-top: 1px solid #ccc;">
            <p style="margin: 5px 0; font-size: 12px; color: #666;">Thank you for your purchase!</p>
            <p style="margin: 5px 0; font-size: 12px; color: #666;">We'll contact you soon to confirm your order.</p>
            <p style="margin: 5px 0; font-size: 12px; color: #666;">Order Status: ${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</p>
          </div>
        </div>
      `;

      // Convert to canvas
      const canvas = await html2canvas(receiptContent, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Download PDF
      pdf.save(`receipt-${order.id}.pdf`);
    } catch (error) {
      console.error('Error generating receipt:', error);
      alert('Failed to generate receipt. Please try again.');
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