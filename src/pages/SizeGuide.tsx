import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Ruler, 
  User, 
  Shirt, 
  Heart, 
  CheckCircle, 
  AlertCircle,
  Info,
  Smartphone,
  Download
} from 'lucide-react';

const SizeGuide = () => {
  const [selectedGender, setSelectedGender] = useState('women');

  const sizeCharts = {
    women: {
      tops: [
        { size: 'XS', chest: '32-34', waist: '26-28', hips: '34-36', length: '24-25' },
        { size: 'S', chest: '34-36', waist: '28-30', hips: '36-38', length: '25-26' },
        { size: 'M', chest: '36-38', waist: '30-32', hips: '38-40', length: '26-27' },
        { size: 'L', chest: '38-40', waist: '32-34', hips: '40-42', length: '27-28' },
        { size: 'XL', chest: '40-42', waist: '34-36', hips: '42-44', length: '28-29' },
        { size: 'XXL', chest: '42-44', waist: '36-38', hips: '44-46', length: '29-30' }
      ],
      dresses: [
        { size: 'XS', bust: '32-34', waist: '26-28', hips: '34-36', length: '36-38' },
        { size: 'S', bust: '34-36', waist: '28-30', hips: '36-38', length: '38-40' },
        { size: 'M', bust: '36-38', waist: '30-32', hips: '38-40', length: '40-42' },
        { size: 'L', bust: '38-40', waist: '32-34', hips: '40-42', length: '42-44' },
        { size: 'XL', bust: '40-42', waist: '34-36', hips: '42-44', length: '44-46' },
        { size: 'XXL', bust: '42-44', waist: '36-38', hips: '44-46', length: '46-48' }
      ],
      pants: [
        { size: 'XS', waist: '26-28', hips: '34-36', inseam: '30-31', length: '38-39' },
        { size: 'S', waist: '28-30', hips: '36-38', inseam: '31-32', length: '39-40' },
        { size: 'M', waist: '30-32', hips: '38-40', inseam: '32-33', length: '40-41' },
        { size: 'L', waist: '32-34', hips: '40-42', inseam: '33-34', length: '41-42' },
        { size: 'XL', waist: '34-36', hips: '42-44', inseam: '34-35', length: '42-43' },
        { size: 'XXL', waist: '36-38', hips: '44-46', inseam: '35-36', length: '43-44' }
      ]
    },
    men: {
      tops: [
        { size: 'XS', chest: '34-36', waist: '28-30', length: '26-27', shoulders: '16-17' },
        { size: 'S', chest: '36-38', waist: '30-32', length: '27-28', shoulders: '17-18' },
        { size: 'M', chest: '38-40', waist: '32-34', length: '28-29', shoulders: '18-19' },
        { size: 'L', chest: '40-42', waist: '34-36', length: '29-30', shoulders: '19-20' },
        { size: 'XL', chest: '42-44', waist: '36-38', length: '30-31', shoulders: '20-21' },
        { size: 'XXL', chest: '44-46', waist: '38-40', length: '31-32', shoulders: '21-22' }
      ],
      pants: [
        { size: 'XS', waist: '28-30', hips: '36-38', inseam: '30-31', length: '40-41' },
        { size: 'S', waist: '30-32', hips: '38-40', inseam: '31-32', length: '41-42' },
        { size: 'M', waist: '32-34', hips: '40-42', inseam: '32-33', length: '42-43' },
        { size: 'L', waist: '34-36', hips: '42-44', inseam: '33-34', length: '43-44' },
        { size: 'XL', waist: '36-38', hips: '44-46', inseam: '34-35', length: '44-45' },
        { size: 'XXL', waist: '38-40', hips: '46-48', inseam: '35-36', length: '45-46' }
      ]
    }
  };

  const measurementInstructions = [
    {
      title: 'Chest/Bust',
      description: 'Measure around the fullest part of your chest, keeping the tape horizontal',
      icon: User,
      tips: ['Keep arms relaxed', 'Don\'t pull tape too tight', 'Measure at nipple level']
    },
    {
      title: 'Waist',
      description: 'Measure around your natural waistline, at the narrowest part of your torso',
      icon: Ruler,
      tips: ['Don\'t suck in your stomach', 'Keep tape parallel to floor', 'Measure at belly button level']
    },
    {
      title: 'Hips',
      description: 'Measure around the fullest part of your hips and buttocks',
      icon: Heart,
      tips: ['Stand with feet together', 'Measure at widest point', 'Keep tape horizontal']
    },
    {
      title: 'Length',
      description: 'Measure from shoulder to desired length for tops, or waist to desired length for dresses',
      icon: Ruler,
      tips: ['Start from shoulder seam', 'Measure to desired hem', 'Consider your height']
    }
  ];

  const fitTips = [
    {
      category: 'Tops & Shirts',
      tips: [
        'Shoulders should align with shoulder seams',
        'Sleeves should reach your wrist bone',
        'Chest should have 2-3 inches of ease',
        'Length should cover your waistband'
      ]
    },
    {
      category: 'Dresses',
      tips: [
        'Bust should fit comfortably without gaping',
        'Waist should be defined but not tight',
        'Length should be appropriate for your height',
        'Consider the occasion and style'
      ]
    },
    {
      category: 'Pants & Jeans',
      tips: [
        'Waist should fit comfortably without digging',
        'Hips should have room to move',
        'Length should reach your desired break point',
        'Consider rise height for your body type'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/20 to-muted/40">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Ruler className="w-4 h-4 mr-2" />
            Size Guide
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Perfect Fit
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get accurate measurements and find the right size for your handmade clothing.
          </p>
        </div>

        {/* Gender Selection */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-muted rounded-lg p-1">
            <Button
              variant={selectedGender === 'women' ? 'default' : 'ghost'}
              onClick={() => setSelectedGender('women')}
              className="rounded-md"
            >
              Women
            </Button>
            <Button
              variant={selectedGender === 'men' ? 'default' : 'ghost'}
              onClick={() => setSelectedGender('men')}
              className="rounded-md"
            >
              Men
            </Button>
          </div>
        </div>

        {/* Measurement Instructions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How to Measure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {measurementInstructions.map((instruction) => (
              <Card key={instruction.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <instruction.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{instruction.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{instruction.description}</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {instruction.tips.map((tip, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Size Charts */}
        <Tabs defaultValue="tops" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tops">Tops</TabsTrigger>
            <TabsTrigger value="dresses">Dresses</TabsTrigger>
            <TabsTrigger value="pants">Pants</TabsTrigger>
          </TabsList>

          <TabsContent value="tops" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Women's Tops Size Chart</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold">Size</th>
                        <th className="text-left p-3 font-semibold">Chest (inches)</th>
                        <th className="text-left p-3 font-semibold">Waist (inches)</th>
                        <th className="text-left p-3 font-semibold">Hips (inches)</th>
                        <th className="text-left p-3 font-semibold">Length (inches)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeCharts.women.tops.map((size) => (
                        <tr key={size.size} className="border-b border-border/50 hover:bg-muted/50">
                          <td className="p-3 font-medium">{size.size}</td>
                          <td className="p-3">{size.chest}</td>
                          <td className="p-3">{size.waist}</td>
                          <td className="p-3">{size.hips}</td>
                          <td className="p-3">{size.length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dresses" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Women's Dresses Size Chart</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold">Size</th>
                        <th className="text-left p-3 font-semibold">Bust (inches)</th>
                        <th className="text-left p-3 font-semibold">Waist (inches)</th>
                        <th className="text-left p-3 font-semibold">Hips (inches)</th>
                        <th className="text-left p-3 font-semibold">Length (inches)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeCharts.women.dresses.map((size) => (
                        <tr key={size.size} className="border-b border-border/50 hover:bg-muted/50">
                          <td className="p-3 font-medium">{size.size}</td>
                          <td className="p-3">{size.bust}</td>
                          <td className="p-3">{size.waist}</td>
                          <td className="p-3">{size.hips}</td>
                          <td className="p-3">{size.length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pants" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Women's Pants Size Chart</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold">Size</th>
                        <th className="text-left p-3 font-semibold">Waist (inches)</th>
                        <th className="text-left p-3 font-semibold">Hips (inches)</th>
                        <th className="text-left p-3 font-semibold">Inseam (inches)</th>
                        <th className="text-left p-3 font-semibold">Length (inches)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeCharts.women.pants.map((size) => (
                        <tr key={size.size} className="border-b border-border/50 hover:bg-muted/50">
                          <td className="p-3 font-medium">{size.size}</td>
                          <td className="p-3">{size.waist}</td>
                          <td className="p-3">{size.hips}</td>
                          <td className="p-3">{size.inseam}</td>
                          <td className="p-3">{size.length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Fit Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Fit Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fitTips.map((category) => (
              <Card key={category.category} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shirt className="w-5 h-5" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Size Guide Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold">General Sizing Tips</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Measure yourself in your underwear for accuracy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Use a flexible measuring tape</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Don't pull the tape too tight or too loose</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Measure at the same time of day for consistency</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Consider your body shape when choosing sizes</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-semibold">When to Size Up/Down</h3>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-green-600 mb-2">Size Up If:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• You prefer a relaxed fit</li>
                    <li>• You're between sizes</li>
                    <li>• The fabric has no stretch</li>
                    <li>• You want to layer underneath</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-orange-600 mb-2">Size Down If:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• You prefer a fitted look</li>
                    <li>• The fabric is very stretchy</li>
                    <li>• You want a more tailored appearance</li>
                    <li>• The style runs large</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Ruler className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Need Help Finding Your Size?</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Our sizing experts can help you find the perfect fit. Contact us for personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Size Chart
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide; 