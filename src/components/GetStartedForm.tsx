import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { ArrowRight, Phone, Mail, Building, User } from "lucide-react"

interface GetStartedFormProps {
  isOpen: boolean
  onClose: () => void
}

const GetStartedForm = ({ isOpen, onClose }: GetStartedFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: "Request Submitted Successfully!",
      description: "Our team will contact you within 24 hours to discuss your requirements.",
    })

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      serviceInterest: "",
      message: ""
    })
    
    setIsSubmitting(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            <span className="text-foreground">Get Started with</span>{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Dial Edge Telecom
            </span>
          </DialogTitle>
          <DialogDescription className="text-base">
            Tell us about your communication needs and we'll create a custom solution for your business.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>First Name *</span>
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="John"
                required
                className="border-primary/30 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Last Name *</span>
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Doe"
                required
                className="border-primary/30 focus:border-primary"
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Email Address *</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="john@company.com"
                required
                className="border-primary/30 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Phone Number</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="border-primary/30 focus:border-primary"
              />
            </div>
          </div>

          {/* Company Field */}
          <div className="space-y-2">
            <Label htmlFor="company" className="flex items-center space-x-2">
              <Building className="w-4 h-4" />
              <span>Company Name *</span>
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder="Your Company Inc."
              required
              className="border-primary/30 focus:border-primary"
            />
          </div>

          {/* Service Interest */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Service Interest</Label>
            <Select onValueChange={(value) => handleInputChange("serviceInterest", value)}>
              <SelectTrigger className="border-primary/30 focus:border-primary">
                <SelectValue placeholder="Select a service you're interested in" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="voip">VoIP Solutions</SelectItem>
                <SelectItem value="dialer">Dialer Termination</SelectItem>
                <SelectItem value="inbound">Inbound Origination</SelectItem>
                <SelectItem value="enterprise">Enterprise Communication</SelectItem>
                <SelectItem value="analytics">Call Analytics</SelectItem>
                <SelectItem value="consulting">Telecom Consulting</SelectItem>
                <SelectItem value="custom">Custom Solution</SelectItem>
                <SelectItem value="not-sure">Not Sure Yet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message">Tell us about your requirements</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Describe your current communication challenges, expected call volume, geographic coverage needs, or any specific requirements..."
              rows={4}
              className="border-primary/30 focus:border-primary resize-none"
            />
          </div>

          {/* Benefits */}
          <div className="bg-primary/5 rounded-lg p-4 space-y-2">
            <h4 className="font-semibold text-foreground">What happens next?</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Our team will review your requirements within 24 hours</li>
              <li>• We'll schedule a consultation call to discuss your needs</li>
              <li>• Receive a custom proposal with pricing and implementation timeline</li>
              <li>• Get started with a dedicated account manager</li>
            </ul>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-primary/30"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default GetStartedForm