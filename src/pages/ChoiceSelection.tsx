import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Edit, Scan, PenTool } from "lucide-react";

const ChoiceSelection = () => {
  const [selectedMode, setSelectedMode] = useState(null);

  const handleNavigation = (mode) => {
    setSelectedMode(mode);
    console.log(`Navigating to dashboard with mode: ${mode}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#053721] to-[#E8EEA5] flex items-center justify-center p-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4 drop-shadow-lg">
            Welcome to Your Inventory Assistant
          </h1>
          <p className="text-xl text-yellow-300">
            How would you like to add your inventory today?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* OCR Option */}
          <Card className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center">
            <div className="mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Scan className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">
                Smart OCR Upload
              </h2>
              <p className="text-gray-100 mb-6 leading-relaxed">
                Upload invoices, receipts, or inventory sheets. Our AI will automatically detect and extract your product details.
              </p>
              <div className="space-y-3 text-sm text-gray-200 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Supports PDF, Images, Excel</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Scan className="h-4 w-4" />
                  <span>Auto-detects product names & prices</span>
                </div>
              </div>
            </div>
            <Button
              onClick={() => handleNavigation("ocr")}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              Use Smart OCR
            </Button>
          </Card>

          {/* Manual Input Option */}
          <Card className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center">
            <div className="mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <PenTool className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">
                Manual Input
              </h2>
              <p className="text-gray-100 mb-6 leading-relaxed">
                Prefer to enter your inventory details manually? Get full control over every field and detail.
              </p>
              <div className="space-y-3 text-sm text-gray-200 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <Edit className="h-4 w-4" />
                  <span>Complete control over entries</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <PenTool className="h-4 w-4" />
                  <span>Perfect for organized inventories</span>
                </div>
              </div>
            </div>
            <Button
              onClick={() => handleNavigation("manual")}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              Input Manually
            </Button>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-yellow-300/80">
            Don't worry, you can always switch between methods later!
          </p>
        </div>

        {selectedMode && (
          <div className="mt-6 text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
              <p className="text-yellow-200 font-medium">
                Selected mode: <span className="capitalize font-bold">{selectedMode}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChoiceSelection;