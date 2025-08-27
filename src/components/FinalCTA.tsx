import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <footer className="gradient-hero text-white text-center py-16 md:py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Sẵn sàng tham gia và kết nối chưa?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Đừng để những thắc mắc của bạn bị trôi đi trong hàng ngàn bình luận. Hãy để trợ lý ảo của mình hỗ trợ bạn ngay bây giờ.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="https://m.me/nhilesg.anne" target="_blank" rel="noopener noreferrer">
            💬 Bắt đầu trò chuyện ngay!
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default FinalCTA;