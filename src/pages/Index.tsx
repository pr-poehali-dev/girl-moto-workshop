import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: "moto",
      icon: "Bike",
      title: "Мото-сервис",
      description: "Профессиональное обслуживание от девушек-механиков",
      features: ["ТО и диагностика", "Ремонт любой сложности", "Кастомизация"]
    },
    {
      id: "nails",
      icon: "Sparkles",
      title: "Маникюр",
      description: "Красивые ногти пока ваш байк в заботливых руках",
      features: ["Классический маникюр", "Гель-лак", "Nail-арт"]
    },
    {
      id: "massage",
      icon: "Hand",
      title: "Массаж",
      description: "Расслабьтесь после долгой дороги",
      features: ["Релакс-массаж", "Спортивный", "Точечный"]
    },
    {
      id: "coffee",
      icon: "Coffee",
      title: "Кофейня",
      description: "Ароматный кофе и уютная атмосфера",
      features: ["Авторские напитки", "Здоровые снеки", "Коворкинг"]
    }
  ];

  const team = [
    {
      name: "Алиса",
      role: "Главный механик",
      specialty: "Harley Davidson",
      image: "https://cdn.poehali.dev/projects/fb6a9a8c-58cb-4e0b-a213-2ac5f96215e8/files/6656f427-6d04-41f7-9d9c-bf5d2a75c7cd.jpg"
    },
    {
      name: "Мария",
      role: "Мастер по кастомизации",
      specialty: "Японские байки",
      image: "https://cdn.poehali.dev/projects/fb6a9a8c-58cb-4e0b-a213-2ac5f96215e8/files/6e3f0398-23ca-4eea-8531-b40c4863bde0.jpg"
    },
    {
      name: "Виктория",
      role: "Диагност",
      specialty: "Электроника",
      image: "https://cdn.poehali.dev/projects/fb6a9a8c-58cb-4e0b-a213-2ac5f96215e8/files/9c58c2d6-c2e3-4f4b-bf36-cabe1ef58936.jpg"
    }
  ];

  const membershipBenefits = [
    { icon: "Percent", text: "Скидка 15% на все услуги" },
    { icon: "Calendar", text: "Приоритетная запись" },
    { icon: "Gift", text: "Бонусы и подарки" },
    { icon: "Users", text: "Закрытые мероприятия" },
    { icon: "Crown", text: "VIP-зона отдыха" },
    { icon: "Zap", text: "Экспресс-обслуживание" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Bike" size={32} className="text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MotoLady
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#team" className="hover:text-primary transition-colors">Команда</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#membership" className="hover:text-primary transition-colors">Членство</a>
            <Button variant="default" size="sm">
              <Icon name="Calendar" size={16} className="mr-2" />
              Записаться
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                Первая в России 🏍️
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-100">SANTA LUCIA  
мото мастерская для девушек</h1>
              <p className="text-xl text-muted-foreground">
                Пространство, где девушки-механики заботятся о вашем байке, 
                пока вы отдыхаете с кофе, маникюром и массажем
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Записаться на сервис
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" size={20} className="mr-2" />
                  Видео о нас
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиенток</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">5★</div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/fb6a9a8c-58cb-4e0b-a213-2ac5f96215e8/files/6e3f0398-23ca-4eea-8531-b40c4863bde0.jpg"
                alt="Rider"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Всё в одном месте
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мультипространство для райдеров: от техобслуживания до релакса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/50 animate-slide-in-up ${
                  activeService === service.id ? "border-primary shadow-primary/20" : ""
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
                onClick={() => setActiveService(service.id)}
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon name={service.icon as any} size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                    <ul className="space-y-2 w-full">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              Команда мечты
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Девушки-механики
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессионалы своего дела с любовью к мотоциклам
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <Card 
                key={idx}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60"></div>
                </div>
                <CardContent className="relative -mt-20 z-10">
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl p-6 border border-border">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Wrench" size={16} />
                      <span>{member.specialty}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Галерея</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши работы
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((idx) => (
              <div 
                key={idx}
                className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <img 
                  src={`https://cdn.poehali.dev/projects/fb6a9a8c-58cb-4e0b-a213-2ac5f96215e8/files/${
                    idx === 1 ? "6656f427-6d04-41f7-9d9c-bf5d2a75c7cd" :
                    idx === 2 ? "6e3f0398-23ca-4eea-8531-b40c4863bde0" :
                    "9c58c2d6-c2e3-4f4b-bf36-cabe1ef58936"
                  }.jpg`}
                  alt={`Gallery ${idx}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <Button variant="secondary" size="sm">
                    <Icon name="ZoomIn" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
                Членство
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Клубная система
              </h2>
              <p className="text-xl text-muted-foreground">
                Станьте частью нашего комьюнити и получайте эксклюзивные привилегии
              </p>
            </div>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/30 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {membershipBenefits.map((benefit, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-xl bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-colors animate-fade-in"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon name={benefit.icon as any} size={24} className="text-white" />
                      </div>
                      <span className="font-medium">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center space-y-6">
                  <div className="inline-flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      4 990₽
                    </span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                  <Button size="lg" className="w-full md:w-auto bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90">
                    <Icon name="Crown" size={20} className="mr-2" />
                    Оформить членство
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Готовы присоединиться?
            </h2>
            <p className="text-xl text-muted-foreground">
              Запишитесь на первый визит и получите скидку 20%
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={20} className="text-primary" />
                <span>Москва, ул. Гаражная, 15</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={20} className="text-primary" />
                <span>+7 (495) 123-45-67</span>
              </div>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:opacity-90">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Bike" size={28} className="text-primary" />
              <span className="text-xl font-bold">MotoLady</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Send" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 MotoLady. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;