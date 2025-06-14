"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
// import { toast } from 'sonner';

const Reservation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    accommodationType: "",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast({
    //   title: "Reservation Request Submitted",
    //   description: "Thank you for your interest. Our concierge team will contact you within 24 hours to confirm your luxury experience.",
    // });
    console.log("Reservation submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section id="reservation" className="section-padding bg-luxury-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-charcoal mb-6">
            Reserve Your
            <span className="block luxury-text-gradient">
              Exclusive Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Begin your journey to unparalleled luxury. Our dedicated team will
            craft a personalized experience that exceeds your highest
            expectations.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label
                  htmlFor="firstName"
                  className="text-luxury-charcoal font-semibold mb-2 block"
                >
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="border-2 border-gray-200 focus:border-gray-400 rounded-lg py-3 px-4"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="lastName"
                  className="text-luxury-charcoal font-semibold mb-2 block"
                >
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="border-2 border-gray-200 focus:border-gray-400 rounded-lg py-3 px-4"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label
                  htmlFor="email"
                  className="text-luxury-charcoal font-semibold mb-2 block"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border-2 border-gray-200 focus:border-gray-400 rounded-lg py-3 px-4"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="text-luxury-charcoal font-semibold mb-2 block"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="border-2 border-gray-200 focus:border-gray-400 rounded-lg py-3 px-4"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Label
                  htmlFor="checkIn"
                  className="text-luxury-charcoal font-semibold mb-2 block"
                >
                  Check-in Date
                </Label>
                <Input
                  id="checkIn"
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => handleInputChange("checkIn", e.target.value)}
                  className="border-2 border-gray-200 focus:border-gray-400 rounded-lg py-3 px-4"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="checkOut"
                  className="text-luxury-charcoal font-semibold mb-2 block"
                >
                  Check-out Date
                </Label>
                <Input
                  id="checkOut"
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) =>
                    handleInputChange("checkOut", e.target.value)
                  }
                  className="border-2 border-gray-200 focus:border-gray-400 rounded-lg py-3 px-4"
                  required
                />
              </div>
              <div>
                <Label className="text-luxury-charcoal font-semibold mb-2 block">
                  Number of Guests
                </Label>
                <Select
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onValueChange={(value: any) =>
                    handleInputChange("guests", value)
                  }
                >
                  <SelectTrigger className="border-2 border-gray-200 focus:border-gray-400 rounded-lg py-3 px-4">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-xl">
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5+">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label className="text-luxury-charcoal font-semibold mb-2 block">
                Accommodation Type
              </Label>
              <Select
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onValueChange={(value: any) =>
                  handleInputChange("accommodationType", value)
                }
              >
                <SelectTrigger className="border-2 border-gray-200 focus:border-gray-400 rounded-lg py-3 px-4">
                  <SelectValue placeholder="Select accommodation" />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-xl">
                  <SelectItem value="luxury-suite">Luxury Suite</SelectItem>
                  <SelectItem value="presidential-suite">
                    Presidential Suite
                  </SelectItem>
                  <SelectItem value="golf-villa">Golf Villa</SelectItem>
                  <SelectItem value="penthouse">
                    Penthouse Collection
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="specialRequests"
                className="text-luxury-charcoal font-semibold mb-2 block"
              >
                Special Requests or Preferences
              </Label>
              <Textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) =>
                  handleInputChange("specialRequests", e.target.value)
                }
                className="border-2 border-gray-200 focus:border-gray-400 rounded-lg py-3 px-4 min-h-[120px]"
                placeholder="Please let us know about any special occasions, dietary requirements, accessibility needs, or preferences that will help us create your perfect experience..."
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                className="bg-luxury-gradient text-base sm:text-lg px-6 sm:px-12 py-3 sm:py-4 w-full sm:w-auto"
              >
                Submit Reservation Request
              </Button>
              <p className="text-sm text-gray-600 mt-4 px-2">
                Our concierge team will contact you within 24 hours to confirm
                availability and finalize your luxury experience.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
