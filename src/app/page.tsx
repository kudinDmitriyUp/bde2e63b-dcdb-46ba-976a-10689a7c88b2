"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Leaf, Truck, Shield } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="grid"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="BananaFresh"
          button={{ text: "Shop Now", href: "products" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="BananaFresh"
          description="Premium quality bananas delivered fresh from farm to your table. Experience the sweetest, ripest bananas nature has to offer."
          buttons={[
            { text: "Shop Bananas", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763319750508-dffaevh4.jpg"
          imageAlt="Fresh ripe bananas"
          showDimOverlay={false}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="At BananaFresh, we're passionate about delivering the finest bananas from trusted farms around the world. Every banana is carefully selected for perfect ripeness, sweetness, and quality."
          features={[
            {
              icon: Leaf,
              title: "Farm Fresh Quality",
              description: "Sourced directly from premium banana farms with sustainable growing practices and optimal harvesting techniques."
            },
            {
              icon: Truck,
              title: "Fast Delivery",
              description: "Quick shipping ensures your bananas arrive at perfect ripeness, maintaining their natural flavor and nutritional value."
            },
            {
              icon: Shield,
              title: "Quality Guaranteed",
              description: "100% satisfaction guarantee on every order. Fresh, sweet, and perfectly ripe bananas or your money back."
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Premium Banana Selection"
          description="Discover our carefully curated collection of the world's finest bananas"
          tag="Fresh Arrivals"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "BananaFresh",
              name: "Premium Organic Bananas",
              price: "$4.99",
              rating: 5,
              reviewCount: "2.4k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763319751097-yak71fzj.jpg",
              imageAlt: "Premium organic bananas"
            },
            {
              id: "2",
              brand: "BananaFresh",
              name: "Smoothie Perfect Bananas",
              price: "$3.99",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763319751822-7i48whcb.jpg",
              imageAlt: "Bananas perfect for smoothies"
            },
            {
              id: "3",
              brand: "BananaFresh",
              name: "Baking Grade Bananas",
              price: "$5.49",
              rating: 4,
              reviewCount: "956",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763319752517-z1gt6xhu.jpg",
              imageAlt: "Bananas perfect for baking"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real feedback from banana lovers who trust BananaFresh for quality"
          tag="Reviews"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Health Enthusiast",
              testimonial: "These are hands down the best bananas I've ever tasted! Perfect ripeness, incredibly sweet, and they last longer than any other bananas I've bought.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763319753176-yb6ngng8.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Chef Martinez",
              role: "Professional Chef",
              testimonial: "As a chef, I need consistent quality ingredients. BananaFresh delivers every time - perfect for both eating fresh and cooking applications.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763319753937-t77ujlzv.jpg",
              imageAlt: "Chef Martinez"
            },
            {
              id: "3",
              name: "Mike Thompson",
              role: "Fitness Trainer",
              testimonial: "I recommend BananaFresh to all my clients. The nutritional quality is outstanding and they're perfect for pre and post-workout nutrition.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763319754646-dw7mat4d.jpg",
              imageAlt: "Mike Thompson"
            },
            {
              id: "4",
              name: "Lisa Chen",
              role: "Mother of Three",
              testimonial: "My kids absolutely love these bananas! They're naturally sweet, perfect for lunch boxes, and I feel great knowing they're getting premium quality fruit.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763319755419-yccdx3g3.jpg",
              imageAlt: "Lisa Chen"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Leading Retailers"
          description="Join thousands of satisfied customers and trusted partners"
          tag="Partners"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763319756493-mof6xvb9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763319757252-9pxm2pz8.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763319757983-bpp8hvvl.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763319758790-zxsedcfe.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763319759546-1iwlbrwz.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763319760258-dnaojne4.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763319761023-xew7w4nk.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about our premium banana delivery service"
          tag="Help"
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How do you ensure banana freshness during shipping?",
              content: "We use temperature-controlled packaging and expedited shipping to ensure your bananas arrive at perfect ripeness. Our bananas are picked at optimal timing and carefully handled throughout the delivery process."
            },
            {
              id: "2",
              title: "What if my bananas arrive overripe or damaged?",
              content: "We offer a 100% satisfaction guarantee. If your bananas don't meet our quality standards, contact us within 24 hours for a full refund or replacement shipment at no additional cost."
            },
            {
              id: "3",
              title: "Do you offer organic banana options?",
              content: "Yes! We offer certified organic bananas sourced from farms that use sustainable, pesticide-free growing practices. Look for our 'Premium Organic' selection in our product lineup."
            },
            {
              id: "4",
              title: "How should I store my bananas after delivery?",
              content: "Store bananas at room temperature away from direct sunlight. To slow ripening, separate bananas from the bunch. For faster ripening, keep them together in a paper bag with an apple."
            },
            {
              id: "5",
              title: "What's your delivery schedule?",
              content: "We deliver Monday through Friday with most orders arriving within 2-3 business days. Rush delivery options are available for next-day delivery in select areas."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Fresh"
          title="Ready for Premium Bananas?"
          description="Join our newsletter for exclusive offers, seasonal selections, and banana care tips delivered to your inbox."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763319761872-84cfmufs.jpg"
          imageAlt="Banana plantation"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you'll receive our weekly newsletter with fresh deals and banana tips. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="BananaFresh"
          columns={[
            {
              items: [
                { label: "Products", href: "products" },
                { label: "About Us", href: "about" },
                { label: "Quality Promise", href: "quality" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Shipping Info", href: "shipping" },
                { label: "Returns", href: "returns" }
              ]
            },
            {
              items: [
                { label: "Newsletter", href: "newsletter" },
                { label: "Recipes", href: "recipes" },
                { label: "Nutrition", href: "nutrition" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}