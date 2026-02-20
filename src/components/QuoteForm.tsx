import { useState } from "react";
import { Toaster,toast } from "react-hot-toast";

type FormData = {
  projectType: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot:string;
};

const initialData: FormData = {
  projectType: "",
  budget: "",
  timeline: "",
  name: "",
  email: "",
  phone: "",
  message: "",
  honeypot:""
};

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialData);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const validateStep = () => {
    switch (step) {
      case 1:
        return formData.projectType !== "";
      case 2:
        return formData.budget !== "";
      case 3:
        return formData.timeline !== "";
      case 4:
        return formData.name !== "" && formData.email !== "";
      default:
        return true;
    }
  };

const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("/api/send-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error);

    toast.success("Quote sent successfully");
    setFormData(initialData);
    setStep(1);

  } catch (err) {
    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="w-full max-w-2xl mx-auto bg-base-200 p-2 md:p-8 rounded-2xl shadow-xl">
        <Toaster position="bottom-right" />

      {/* Progress */}
      <ul className="steps w-full mb-8 transition-all">
        <li className={`step ${step >= 1 ? "step-primary" : ""}`}>Project</li>
        <li className={`step ${step >= 2 ? "step-primary" : ""}`}>Budget</li>
        <li className={`step ${step >= 3 ? "step-primary" : ""}`}>Timeline</li>
        <li className={`step ${step >= 4 ? "step-primary" : ""}`}>Details</li>
      </ul>

      <form onSubmit={handleSubmit} className="space-y-6 min-h-72">

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Select Project Type</h2>

            <div className="grid gap-4">
              {["Residential", "Commercial", "Renovation", "Interior Design"].map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => updateField("projectType", type)}
                  className={`btn w-full ${
                    formData.projectType === type ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Estimated Budget</h2>
            <select
              className="select select-bordered w-full"
              value={formData.budget}
              onChange={(e) => updateField("budget", e.target.value)}
            >
              <option value="">Select Budget Range</option>
              <option>$10k - $50k</option>
              <option>$50k - $150k</option>
              <option>$150k - $500k</option>
              <option>$500k+</option>
            </select>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Project Timeline</h2>
            <select
              className="select select-bordered w-full"
              value={formData.timeline}
              onChange={(e) => updateField("timeline", e.target.value)}
            >
              <option value="">Select Timeline</option>
              <option>Less than 3 months</option>
              <option>3-6 months</option>
              <option>6-12 months</option>
              <option>1 year+</option>
            </select>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Your Information</h2>

            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
            />

            <input
              type="email"
              required
              placeholder="Email Address"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
            />

            <input
              type="tel"
              required
              placeholder="Phone Number"
              className="input input-bordered w-full"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />

            <textarea
            required
              placeholder="Additional Details"
              className="textarea textarea-bordered w-full"
              rows={4}
              value={formData.message}
              onChange={(e) => updateField("message", e.target.value)}
            />
            <input
                type="text"
                name="company"
                style={{ display: "none" }}
                onChange={(e) => updateField("honeypot", e.target.value)}
                />

          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between pt-4">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="btn btn-outline">
              Back
            </button>
          )}

          {step < 4 && (
            <button type="button" onClick={nextStep} className="btn btn-primary text-white ml-auto">
              Next
            </button>
          )}

          {step === 4 && (
                <button
                type="submit"
                disabled={loading}
                className={`btn btn-primary ${loading ? "loading" : ""}`}
                >
                {loading ? "Sending..." : "Submit Request"}
                </button>

          )}
        </div>
      </form>
    </div>
  );
}
