import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  question: string;
  consent: boolean;
}

const LivestreamForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConsentError, setShowConsentError] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    question: "",
    consent: false
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      setShowConsentError(true);
      return;
    }
    
    setShowConsentError(false);
    
    // TODO: Send data to backend/Google Sheets
    console.log('Livestream Question Data:', formData);
    
    toast({
      title: "Đã gửi câu hỏi thành công! ✅",
      description: "Nhi sẽ xem qua và chọn những câu hỏi hay nhất!",
    });
    
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleConsentChange = (checked: boolean) => {
    setFormData({
      ...formData,
      consent: checked
    });
    if (checked) setShowConsentError(false);
  };

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-large text-center gradient-card">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Đã gửi câu hỏi thành công! ✅</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cảm ơn bạn rất nhiều! Nhi sẽ xem qua và chọn những câu hỏi hay nhất cho buổi livestream sắp tới. Hẹn gặp lại bạn nhé!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-card p-8 md:p-12 rounded-2xl shadow-large text-center gradient-card">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Đặt Câu Hỏi Livestream Cho Nhi Lê</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Có điều gì bạn luôn muốn hỏi Nhi trong buổi livestream sắp tới? Hãy để lại câu hỏi ở đây. Những câu hỏi hay nhất sẽ được chọn để trả lời trực tiếp!
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto text-left">
            <div className="mb-4">
              <Label htmlFor="ls_name" className="text-foreground font-medium mb-2 block">Họ và tên</Label>
              <Input
                type="text"
                id="ls_name"
                name="name"
                placeholder="Nguyễn Văn A"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="rounded-lg border-2 focus:border-primary transition-colors"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="ls_email" className="text-foreground font-medium mb-2 block">Email</Label>
              <Input
                type="email"
                id="ls_email"
                name="email"
                placeholder="bancua@email.com"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="rounded-lg border-2 focus:border-primary transition-colors"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="ls_phone" className="text-foreground font-medium mb-2 block">Số điện thoại</Label>
              <Input
                type="tel"
                id="ls_phone"
                name="phone"
                placeholder="090..."
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="rounded-lg border-2 focus:border-primary transition-colors"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="ls_question" className="text-foreground font-medium mb-2 block">Câu hỏi của bạn</Label>
              <Textarea
                id="ls_question"
                name="question"
                rows={4}
                placeholder="Chị Nhi ơi, cho em hỏi..."
                required
                value={formData.question}
                onChange={handleInputChange}
                className="rounded-lg border-2 focus:border-primary transition-colors"
              />
            </div>
            <div className="mb-6 flex items-start">
              <Checkbox
                id="ls_consent"
                checked={formData.consent}
                onCheckedChange={handleConsentChange}
                className="mt-1"
              />
              <Label htmlFor="ls_consent" className="ml-3 text-sm text-muted-foreground">
                Tôi đồng ý nhận thông tin, tin tức và các ưu đãi từ team Nhi Lê qua email và SĐT đã cung cấp.
              </Label>
            </div>
            {showConsentError && (
              <div className="text-destructive text-sm mb-4 text-center">
                Bạn cần đồng ý với điều khoản để tiếp tục.
              </div>
            )}
            <Button type="submit" variant="gradient" size="lg" className="w-full text-center">
              Gửi câu hỏi ngay
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LivestreamForm;