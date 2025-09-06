import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Edit, Scan, PenTool } from "lucide-react";

const ChoiceSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            📦 Welcome to Your Inventory Assistant
          </h1>
          <p className="text-xl text-muted-foreground">
            How would you like to add your inventory today?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* OCR Option */}
          <Card className="glass-card hover-lift p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Scan className="h-10 w-10 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                📸 Smart OCR Upload
              </h2>
              <p className="text-muted-foreground mb-6">
                Upload invoices, receipts, or inventory sheets. Our AI will automatically detect and extract your product details.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <div className="flex items-center justify-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Supports PDF, Images, Excel</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>✨</span>
                  <span>Auto-detects product names & prices</span>
                </div>
              </div>
            </div>
            <Button 
              onClick={() => navigate("/dashboard?tab=inventory&mode=ocr")}
              className="w-full bg-gradient-primary hover:shadow-primary text-primary-foreground"
              size="lg"
            >
              Use Smart OCR
            </Button>
          </Card>

          {/* Manual Input Option */}
          <Card className="glass-card hover-lift p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <PenTool className="h-10 w-10 text-secondary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                ✍️ Manual Input
              </h2>
              <p className="text-muted-foreground mb-6">
                Prefer to enter your inventory details manually? Get full control over every field and detail.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <div className="flex items-center justify-center gap-2">
                  <Edit className="h-4 w-4" />
                  <span>Complete control over entries</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>🎯</span>
                  <span>Perfect for organized inventories</span>
                </div>
              </div>
            </div>
            <Button 
              onClick={() => navigate("/dashboard?tab=inventory&mode=manual")}
              variant="secondary"
              className="w-full"
              size="lg"
            >
              Input Manually
            </Button>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Don't worry, you can always switch between methods later! 🔄
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChoiceSelection;