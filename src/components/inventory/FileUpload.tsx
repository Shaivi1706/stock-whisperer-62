// import { useState, useCallback } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { useToast } from "@/hooks/use-toast";
// import { Upload, FileSpreadsheet, Camera, CheckCircle } from "lucide-react";

// export const FileUpload = () => {
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadComplete, setUploadComplete] = useState(false);
//   const { toast } = useToast();

//   const simulateUpload = useCallback(() => {
//     setIsUploading(true);
//     setUploadProgress(0);
    
//     const interval = setInterval(() => {
//       setUploadProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setIsUploading(false);
//           setUploadComplete(true);
//           toast({
//             title: "Upload Complete! 🎉",
//             description: "Your inventory has been processed and is ready to view.",
//           });
//           return 100;
//         }
//         return prev + 10;
//       });
//     }, 200);
//   }, [toast]);

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;
//     if (files && files.length > 0) {
//       toast({
//         title: "File Selected",
//         description: `Processing ${files[0].name}...`,
//       });
//       simulateUpload();
//     }
//   };

//   const handleDragOver = (event: React.DragEvent) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event: React.DragEvent) => {
//     event.preventDefault();
//     const files = event.dataTransfer.files;
//     if (files.length > 0) {
//       toast({
//         title: "File Dropped",
//         description: `Processing ${files[0].name}...`,
//       });
//       simulateUpload();
//     }
//   };

//   return (
//     <Card className="glass-card p-6">
//       <div className="flex items-center gap-2 mb-6">
//         <Upload className="h-5 w-5 text-primary" />
//         <h2 className="text-xl font-bold text-foreground">
//           📤 Upload Your Inventory
//         </h2>
//       </div>

//       {!uploadComplete ? (
//         <div className="space-y-6">
//           {/* Drag & Drop Area */}
//           <div
//             className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
//             onDragOver={handleDragOver}
//             onDrop={handleDrop}
//             onClick={() => document.getElementById('file-upload')?.click()}
//           >
//             <div className="space-y-4">
//               <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
//                 <Upload className="h-8 w-8 text-white" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-foreground mb-2">
//                   Drop your files here, or click to browse
//                 </h3>
//                 <p className="text-muted-foreground">
//                   Support for CSV, Excel files, or invoice images (OCR powered!)
//                 </p>
//               </div>
//             </div>
//           </div>

//           <input
//             id="file-upload"
//             type="file"
//             className="hidden"
//             accept=".csv,.xlsx,.xls,.jpg,.jpeg,.png,.pdf"
//             onChange={handleFileUpload}
//           />

//           {/* Upload Options */}
//           <div className="grid md:grid-cols-2 gap-4">
//             <Card className="glass-subtle p-4 hover-lift">
//               <div className="flex items-center gap-3">
//                 <FileSpreadsheet className="h-8 w-8 text-primary" />
//                 <div>
//                   <h3 className="font-semibold text-foreground">CSV/Excel Upload</h3>
//                   <p className="text-sm text-muted-foreground">
//                     Upload your existing inventory spreadsheets
//                   </p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="glass-subtle p-4 hover-lift">
//               <div className="flex items-center gap-3">
//                 <Camera className="h-8 w-8 text-success" />
//                 <div>
//                   <h3 className="font-semibold text-foreground">Smart Invoice OCR</h3>
//                   <p className="text-sm text-muted-foreground">
//                     Snap photos of invoices - AI will extract products!
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           </div>

//           {/* Progress Bar */}
//           {isUploading && (
//             <div className="space-y-3">
//               <div className="flex justify-between text-sm">
//                 <span className="text-muted-foreground">Processing your inventory...</span>
//                 <span className="text-foreground font-medium">{uploadProgress}%</span>
//               </div>
//               <Progress value={uploadProgress} className="h-2" />
//               <p className="text-sm text-muted-foreground text-center">
//                 🧠 AI is analyzing your products and categorizing risk levels
//               </p>
//             </div>
//           )}
//         </div>
//       ) : (
//         /* Upload Complete State */
//         <div className="text-center space-y-4">
//           <div className="mx-auto w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center">
//             <CheckCircle className="h-8 w-8 text-white" />
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-foreground mb-2">
//               🎉 Upload Complete!
//             </h3>
//             <p className="text-muted-foreground mb-4">
//               Your inventory has been processed. Found 247 products with smart risk analysis.
//             </p>
//             <div className="flex gap-3 justify-center">
//               <Button
//                 onClick={() => setUploadComplete(false)}
//                 variant="outline"
//               >
//                 Upload More
//               </Button>
//               <Button className="bg-gradient-primary">
//                 View Inventory
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </Card>
//   );
// };

import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileSpreadsheet, Camera, CheckCircle } from "lucide-react";

export const FileUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [mode, setMode] = useState<"csv" | "ocr">("csv"); // NEW: track selected mode
  const { toast } = useToast();

  const simulateUpload = useCallback(() => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadComplete(true);
          toast({
            title: "Upload Complete! 🎉",
            description: "Your inventory has been processed and is ready to view.",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  }, [toast]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      toast({
        title: "File Selected",
        description: `Processing ${files[0].name} in ${mode === "ocr" ? "OCR" : "CSV/Excel"} mode...`,
      });
      simulateUpload();
    }
  };

  const handleDragOver = (event: React.DragEvent) => event.preventDefault();
  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      toast({
        title: "File Dropped",
        description: `Processing ${files[0].name} in ${mode === "ocr" ? "OCR" : "CSV/Excel"} mode...`,
      });
      simulateUpload();
    }
  };

  return (
    <Card className="glass-card p-6">
      <div className="flex items-center gap-2 mb-6">
        <Upload className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold text-foreground">
          📤 Upload Your Inventory
        </h2>
      </div>

      {!uploadComplete ? (
        <div className="space-y-6">
          {/* Mode Selection Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card
              className={`glass-subtle p-4 hover-lift cursor-pointer ${mode === "csv" ? "border-2 border-primary" : ""}`}
              onClick={() => setMode("csv")}
            >
              <div className="flex items-center gap-3">
                <FileSpreadsheet className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">CSV/Excel Upload</h3>
                  <p className="text-sm text-muted-foreground">
                    Upload your existing inventory spreadsheets
                  </p>
                </div>
              </div>
            </Card>

            <Card
              className={`glass-subtle p-4 hover-lift cursor-pointer ${mode === "ocr" ? "border-2 border-success" : ""}`}
              onClick={() => setMode("ocr")}
            >
              <div className="flex items-center gap-3">
                <Camera className="h-8 w-8 text-success" />
                <div>
                  <h3 className="font-semibold text-foreground">Smart Invoice OCR</h3>
                  <p className="text-sm text-muted-foreground">
                    Snap photos of invoices - AI will extract products!
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Drag & Drop Area */}
          <div
            className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-upload')?.click()}
          >
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Drop your files here, or click to browse
                </h3>
                <p className="text-muted-foreground">
                  Support for {mode === "ocr" ? "invoice images (OCR powered!)" : "CSV, Excel files"}
                </p>
              </div>
            </div>
          </div>

          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept={mode === "ocr" ? ".jpg,.jpeg,.png,.pdf" : ".csv,.xlsx,.xls"}
            onChange={handleFileUpload}
          />

          {/* Progress Bar */}
          {isUploading && (
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Processing your inventory...</span>
                <span className="text-foreground font-medium">{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
              <p className="text-sm text-muted-foreground text-center">
                🧠 AI is analyzing your products and categorizing risk levels
              </p>
            </div>
          )}
        </div>
      ) : (
        /* Upload Complete State */
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              🎉 Upload Complete!
            </h3>
            <p className="text-muted-foreground mb-4">
              Your inventory has been processed. Found 247 products with smart risk analysis.
            </p>
            <div className="flex gap-3 justify-center">
              <Button
                onClick={() => setUploadComplete(false)}
                variant="outline"
              >
                Upload More
              </Button>
              <Button className="bg-gradient-primary">
                View Inventory
              </Button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};