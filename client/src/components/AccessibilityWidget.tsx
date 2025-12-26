import { useState, useEffect } from "react";
import { Accessibility, Sun, Moon, Type, EyeOff, RotateCcw, X, Languages, Globe, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "sw", label: "Kiswahili" },
  { code: "pt", label: "Português" },
];

export function AccessibilityWidget() {
  const [fontSize, setFontSize] = useState<"normal" | "large" | "extra-large">("normal");
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (language === "en") {
      const script = document.getElementById("google-translate-script");
      if (script) script.remove();
      const widget = document.getElementById("google_translate_element");
      if (widget) widget.innerHTML = "";
      // Force reload to clear translation if necessary, or just rely on attribute
      document.documentElement.setAttribute("lang", "en");
      return;
    }

    // Google Translate implementation
    const addScript = () => {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "fr,sw,pt,en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    if (!document.getElementById("google-translate-script")) {
      addScript();
    }

    // Trigger the translation by clicking the hidden Google Translate UI
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (select) {
        select.value = language;
        select.dispatchEvent(new Event("change"));
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [language]);

  useEffect(() => {
    const root = document.documentElement;
    
    // Font size
    root.classList.remove("text-normal", "text-large", "text-extra-large");
    if (fontSize === "large") root.classList.add("text-large");
    if (fontSize === "extra-large") root.classList.add("text-extra-large");

    // Contrast
    if (highContrast) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }

    // Grayscale
    if (grayscale) {
      root.classList.add("grayscale-mode");
    } else {
      root.classList.remove("grayscale-mode");
    }
  }, [fontSize, highContrast, grayscale]);

  const reset = () => {
    setFontSize("normal");
    setHighContrast(false);
    setGrayscale(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            className="w-14 h-14 rounded-full shadow-2xl bg-primary hover:bg-primary/90 text-white transition-transform hover:scale-110 active:scale-95 border-4 border-white dark:border-gray-800"
            aria-label="Accessibility Options"
          >
            <Accessibility className="w-8 h-8" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-80 p-0 overflow-hidden rounded-2xl shadow-2xl border-none">
          <div className="bg-primary p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Accessibility className="w-5 h-5" />
              <h3 className="font-bold">Accessibility Tools</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 rounded-full h-8 w-8"
              onClick={reset}
              title="Reset All"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="p-4 space-y-6 bg-white dark:bg-gray-900">
            {/* Font Size */}
            <div className="space-y-3">
              <label className="text-sm font-semibold flex items-center gap-2 text-gray-500">
                <Type className="w-4 h-4" /> Text Size
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["normal", "large", "extra-large"] as const).map((size) => (
                  <Button
                    key={size}
                    variant={fontSize === size ? "default" : "outline"}
                    className={cn(
                      "text-xs capitalize h-10",
                      fontSize === size && "bg-primary text-white"
                    )}
                    onClick={() => setFontSize(size)}
                  >
                    {size.replace("-", " ")}
                  </Button>
                ))}
              </div>
            </div>

            {/* Visual Toggles */}
            <div className="space-y-3">
              <label className="text-sm font-semibold flex items-center gap-2 text-gray-500">
                <EyeOff className="w-4 h-4" /> Visual Adjustments
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant={highContrast ? "default" : "outline"}
                  className={cn(
                    "flex flex-col gap-1 h-20 text-xs",
                    highContrast && "bg-primary text-white"
                  )}
                  onClick={() => setHighContrast(!highContrast)}
                >
                  <Sun className="w-5 h-5" />
                  High Contrast
                </Button>
                <Button
                  variant={grayscale ? "default" : "outline"}
                  className={cn(
                    "flex flex-col gap-1 h-20 text-xs",
                    grayscale && "bg-primary text-white"
                  )}
                  onClick={() => setGrayscale(!grayscale)}
                >
                  <Moon className="w-5 h-5" />
                  Grayscale
                </Button>
              </div>
            </div>

            {/* Language Translation */}
            <div className="space-y-3">
              <label className="text-sm font-semibold flex items-center gap-2 text-gray-500">
                <Globe className="w-4 h-4" /> Translation
              </label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-full h-10">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  {LANGUAGES.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <p className="text-[10px] text-center text-gray-400 italic">
              Tools designed to enhance your browsing experience.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
