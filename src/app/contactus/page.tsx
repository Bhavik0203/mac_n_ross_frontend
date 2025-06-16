"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Upload, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import team from '@/app/images/bgg.png';
import image from '@/app/images/pics1.jpeg';
import Image from 'next/image';
const AnimatedContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    projectDetails: '',
    file: null
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    'Audit & Assurance Services',
    'Actuarial Valuation', 
    'Accounting Services',
    'Management Consultancy',
    'Corporate Finance',
    'Corporate Tax',
    'Company Formation',
    'VAT',
    'Excise Tax',
    'Economic Substance Regulation (ESR)',
    'Country by Country Reporting (CbCR)',
    'Others'
  ];

  const budgetRanges = [
    '$5k - $10k',
    '$10k - $25k', 
    '$25k - $50k',
    '$50k - $100k',
    '$100k+'
  ];

  const steps = [
    {
      number: 1,
      title: "We'll prepare a proposal",
      description: "Required scope, timeline and fair price will be included if you provide us with detailed information about a project."
    },
    {
      number: 2, 
      title: "Together we discuss it",
      description: "Let's get acquainted and discuss all the possible variants and options. Google Hangouts or Skype usually works great."
    },
    {
      number: 3,
      title: "Let's start building", 
      description: "When the contract is signed and all goals are set we can start the first sprint."
    }
  ];

interface FormData {
    name: string;
    email: string;
    company: string;
    budget: string;
    service: string;
    projectDetails: string;
    file: File | null;
}

interface Step {
    number: number;
    title: string;
    description: string;
}

interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {}

const handleInputChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
        ...prev,
        [name]: value
    }));
};

interface FileUploadEvent extends React.ChangeEvent<HTMLInputElement> {}

const handleFileUpload = (e: FileUploadEvent) => {
    const file = e.target.files && e.target.files[0];
    setFormData((prev: FormData) => ({
        ...prev,
        file: file
    }));
};

interface SubmitEvent extends React.MouseEvent<HTMLButtonElement, MouseEvent> {}

const handleSubmit = (e: SubmitEvent) => {
    if (e && e.preventDefault) {
        e.preventDefault();
    }
    console.log('Form submitted:', formData);
    // Add your form submission logic here
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
     <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
  {/* Background Image */}
  <div className="absolute inset-0 h-full w-full bg-fixed lg-bg-fixed">
    <Image
      src={image}
      alt="Contact Us Background"
      className="object-cover w-full h-full"
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
    <div className="text-center max-w-3xl mx-auto text-white">
      <p className="uppercase tracking-wider text-gray-300 mt-10 text-[16px] sm:text-[18px]">
        Contact Us
      </p>
      <h2 className="mb-4 text-white text-[42px] sm:text-[56px]">
        Get in Touch with Mac & Ross
      </h2>
      <p className="tracking-wider text-gray-300 mb-4">
        Have questions or need assistance? Reach out to Mac & Ross Chartered Accountants L.L.C. 
        Our team is here to support you with audit, accounting, consulting, and taxation services.
        Let’s connect and discuss how we can assist your business.
      </p>
    </div>
  </div>
</section>


     <section
      className="relative py-10 px-4 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url('${team.src}')` }}
    >

         <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Process Steps */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                What will<br />be next step?
              </h1>
              <p className="text-gray-600 text-lg">
                You are one step closer to build your perfect product
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex items-start space-x-4 transform transition-all duration-500 hover:scale-105 cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  onMouseEnter={() => setHoveredStep(step.number)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 ${hoveredStep === step.number ? 'bg-pink-600 scale-110 shadow-lg' : 'bg-pink-500'}`}>
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-gray-900 mb-2 transition-colors duration-300 ${hoveredStep === step.number ? 'text-pink-600' : ''}`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information Section */}
            <div className="mt-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+971-4-3584999</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+971-55-1950580</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">contact@macnross.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">UAE Location - Mac & Ross Chartered Accountants</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-300 group-hover:bg-gray-100"
                      required
                    />
                  </div>
                  <div className="group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-300 group-hover:bg-gray-100"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="group">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-300 group-hover:bg-gray-100"
                    />
                  </div>
                  <div className="group relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-300 group-hover:bg-gray-100 appearance-none cursor-pointer"
                    >
                      <option value="">App budget</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="group relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-300 group-hover:bg-gray-100 appearance-none cursor-pointer"
                    >
                      <option value="">Select Service Type</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600 text-sm mb-3">Optional</p>
                  <textarea
                    name="projectDetails"
                    placeholder="Project details"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-100 resize-none"
                  />
                </div>

                <div className="mb-8">
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 cursor-pointer group">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                      accept=".pdf,.doc,.docx,.txt"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-blue-500 transition-colors" />
                      <p className="text-gray-500 text-sm group-hover:text-blue-600 transition-colors">
                        {formData.file ? formData.file.name : "DROP IT LIKE IT'S HOT"}
                      </p>
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send
                </button>

                <p className="text-center text-gray-500 text-sm mt-4">
                  If you need to have a DNA first, just contact us at{' '}
                  <a href="mailto:contact@macnross.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    contact@macnross.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className={`mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive business solutions tailored to meet your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={service}
                className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${800 + (index * 100)}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">
                  Professional {service.toLowerCase()} solutions tailored to your business needs.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={`mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-center text-white transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Mac & Ross for their business needs. 
            Let's discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
     
    </div>
  );
};

export default AnimatedContactForm;