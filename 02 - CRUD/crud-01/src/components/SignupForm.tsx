import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

// 1. Extract a reusable Input component to clean up the JSX
interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, ...props }) => (
  <div>
    <label htmlFor={name} className="block mb-2 text-sm font-medium">
      {label}
    </label>
    <input
      id={name}
      name={name}
      className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-purple-500/50 focus:border-purple-600 block w-full p-2.5 placeholder-gray-400"
      required
      {...props}
    />
  </div>
);

const SignupForm: React.FC = () => {
  // 2. Consolidate form state into a single object
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [status, setStatus] = useState<{ type: 'error' | 'success'; msg: string } | null>(null);

  // 3. Single change handler for all text inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // 4. Validation Logic
    if (!formData.terms) {
      return setStatus({ type: 'error', msg: "You must accept the terms." });
    }
    if (formData.password !== formData.confirmPassword) {
      return setStatus({ type: 'error', msg: "Passwords do not match." });
    }

    console.log("Signup submitted:", formData.email);
    setStatus({ type: 'success', msg: "Account created successfully!" });
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6 py-8">
      <div className="w-full bg-gray-800 rounded-lg shadow border border-gray-700 md:max-w-2xl lg:max-w-4xl p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold md:text-2xl">Create an account</h1>

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <InputField
            label="Your email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
          />
          
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
          />

          <InputField
            label="Confirm password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
          />

          <div className="flex items-start">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={formData.terms}
              onChange={handleChange}
              className="w-4 h-4 mt-1 border border-gray-600 rounded bg-gray-700 focus:ring-purple-500/50"
              required
            />
            <label htmlFor="terms" className="ml-3 text-sm font-light text-gray-400">
              I accept the <a href="#" className="font-medium text-purple-400 hover:underline">Terms and Conditions</a>
            </label>
          </div>

          {status && (
            <p className={`text-sm ${status.type === 'error' ? 'text-red-400' : 'text-green-400'}`} role="alert">
              {status.msg}
            </p>
          )}

          <button type="submit" className="w-full text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py-2.5">
            Create an account
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;