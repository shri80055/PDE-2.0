import React, { useState } from "react";
import InputField from "../components/common/InputField";
import {User, Lock, Mail, Phone} from "lucide-react";
import OTPInput from "../components/common/OPTInput";

function Auth() {
  const [mode, setMode] = useState(null);
  const [otpStep, setOtpStep] = useState(false);

const [otp, setOtp] = useState("");

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl overflow-hidden grid md:grid-cols-2">

        {/* ===== LEFT: CONTEXT PANEL ===== */}
        <div className="bg-[#F2FBF9] p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to Public Data Entry System
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            This service allows citizens to submit, track, and manage land
            record applications online in a secure and transparent manner.
          </p>

          <ul className="space-y-3 text-sm text-gray-700">
            <li>✔ Apply for land record services online</li>
            <li>✔ Track application status anytime</li>
            <li>✔ No repeated office visits</li>
            <li>✔ Secure & Government verified</li>
          </ul>

          <p className="text-xs text-gray-500 mt-6">
            Government of Maharashtra · Land Records Department
          </p>
        </div>

        {/* ===== RIGHT: ACTION PANEL ===== */}
        <div className="p-8">

          {!mode && (
            <>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                How would you like to continue?
              </h2>

              <div className="grid gap-4">
                <ActionCard
                  title="Sign in with Username & Password"
                  desc="Recommended if you already have an account"
                  onClick={() => setMode("signin")}
                />

                <ActionCard
                  title="Sign in using OTP"
                  desc="Quick login using registered mobile number"
                  onClick={() =>{setOtpStep(false);setMode("otp")}}
                />

                <ActionCard
                  title="New User Registration"
                  desc="Create a new citizen account"
                  onClick={() => setMode("signup")}
                />

                <button
                  onClick={() => {setOtpStep(false);setMode("forgot")} }
                  className="text-sm text-green-700 hover:underline text-left"
                >
                  Forgot your password?
                </button>
              </div>
            </>
          )}

          {/* ===== SIGN IN ===== */}
          {mode === "signin" && (
            <FormWrapper title="Citizen Sign In" onBack={() => setMode(null)}>
                <InputField label="Username" icon={User} />
                <InputField label="Password" icon={Lock} type="password" />
              <PrimaryButton text="Sign In" />
            </FormWrapper>
          )}
             

          {/* ===== OTP LOGIN ===== */}
          {mode === "otp" && (
              <FormWrapper title="OTP Based Login" onBack={() => setMode(null)}>
                {!otpStep ? (
                  <>
                    <InputField
                      label="Registered Mobile Number"
                      icon={Phone}
                      placeholder="Enter mobile number"
                      maxLength={10}
                    />

                    <PrimaryButton
                      text="Send OTP"
                      onClick={() => setOtpStep(true)}
                    />
                  </>
                ) : (
                  <>
                    <label className="text-sm font-medium text-gray-700 block">
                      Enter 6-digit OTP
                    </label>

                    <OTPInput length={6} onChange={setOtp} />

                    <PrimaryButton
                      text="Verify & Login"
                      onClick={() => console.log("OTP:", otp)}
                    />
                  </>
                )}
              </FormWrapper>
          )}

          {/* ===== SIGN UP ===== */}
          {mode === "signup" && (
            <FormWrapper title="Citizen Registration" onBack={() => setMode(null)}>
                
              <InputField label="Full Name" icon={User} />
              <InputField label="Mobile Number" icon={Phone} />
              <InputField label="Email Address" icon={Mail} />
              <InputField label="Create Password" icon={Lock} type="password" />
              <InputField label="Confirm Password" icon={Lock} type="password" />
              <PrimaryButton text="Register" />
              <p className="text-xs text-gray-500">
                OTP verification required after registration      
              </p>
            </FormWrapper>
          )}

          {/* ===== FORGOT PASSWORD ===== */}
          {mode === "forgot" && (
            <FormWrapper title="Reset Password" onBack={() => setMode(null)}>
              {!otpStep ? (
                <>
                  <InputField icon={Phone} label="Registered Mobile / Email" />
                  <PrimaryButton text="Send OTP" onClick={() => setOtpStep(true)} />
                </>
              ) : (
                <>
                 <label className="text-sm font-medium text-gray-700 block">
                      Enter 6-digit OTP
                    </label>
                  <OTPInput label="OTP" length={6} onChange={setOtp} />
                  <InputField icon={Lock} label="New Password" type="password" />
                  <InputField icon={Lock} label="Confirm Password" type="password" />
                  <PrimaryButton text="Reset Password" />
                </>
              )}
            </FormWrapper>
          )}

        </div>
      </div>
    </section>
  );
}

/* ===== UI HELPERS ===== */

function ActionCard({ title, desc, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border rounded-lg p-4 text-left hover:border-green-700 hover:bg-green-50 transition"
    >
      <h3 className="font-medium text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </button>
  );
}

function FormWrapper({ title, children, onBack }) {
  return (
    <>
      <button
        onClick={onBack}
        className="text-sm text-gray-500 mb-4 hover:underline"
      >
        ← Back
      </button>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </>
  );
}

function Input({ label, type = "text" }) {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <input
        type={type}
        className="w-full border rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-green-600 focus:outline-none"
      />
    </div>
  );
}

function PrimaryButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
    >
      {text}
    </button>
  );
}

export default Auth;
