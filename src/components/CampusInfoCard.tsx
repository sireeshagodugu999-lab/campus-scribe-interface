import { Card } from "@/components/ui/card";

interface CampusInfoCardProps {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
}

export const CampusInfoCard = ({ title, description, icon, iconAlt }: CampusInfoCardProps) => {
  return (
    <Card className="group p-6 h-full transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 bg-gradient-to-br from-card to-muted/30 border-border/60 hover:border-primary/30">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img 
            src={icon} 
            alt={iconAlt}
            className="w-10 h-10 object-contain"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};