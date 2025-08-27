import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <header className="gradient-hero text-white text-center py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <img 
          src="https://via.placeholder.com/128x128/E91E63/FFFFFF?text=NL" 
          alt="Ảnh đại diện của Nhi Le" 
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-large"
        />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Chào mừng bạn đến Ngôi nhà chung của Nhi Le!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Nơi mọi thắc mắc được giải đáp tức thì và chúng ta kết nối với nhau gần hơn. ❤️
        </p>
        
        <Button 
          variant="gradient" 
          size="lg"
          asChild
        >
          <a href="https://m.me/nhilesg.anne" target="_blank" rel="noopener noreferrer">
            💬 Trò chuyện với Trợ lý ảo ngay!
          </a>
        </Button>
      </div>
    </header>
  );
};

export default HeroSection;