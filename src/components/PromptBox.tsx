import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Mic } from "lucide-react";

export const PromptBox = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("Campus query:", query);
      // Here you would integrate with your campus assistant AI
      setQuery("");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about schedules, facilities, dining, library services, or administrative information..."
            className="pr-24 py-6 text-lg bg-card/80 backdrop-blur-sm border-border/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
          />
          <div className="absolute right-2 flex items-center space-x-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="p-2 h-auto text-muted-foreground hover:text-primary hover:bg-primary/10"
            >
              <Mic className="w-4 h-4" />
            </Button>
            <Button
              type="submit"
              size="sm"
              className="p-2 h-auto bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              disabled={!query.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </form>
      <p className="text-xs text-muted-foreground/80 mt-2 text-center">
        Your intelligent campus companion for comprehensive university information
      </p>
    </div>
  );
};