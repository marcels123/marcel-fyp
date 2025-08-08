"use client";

import { useState } from 'react';
import { EyeOpenIcon, EyeNoneIcon } from '@radix-ui/react-icons';

interface PasswordInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  label?: string;
  error?: string;
}

/**
 * Reusable password input component with show/hide functionality
 * 
 * @example
 * ```tsx
 * <PasswordInput
 *   id="password"
 *   name="password"
 *   value={password}
 *   onChange={handleChange}
 *   label="Password"
 *   required
 * />
 * ```
 */
export function PasswordInput({
  id,
  name,
  value,
  onChange,
  placeholder = "Enter password",
  required = false,
  disabled = false,
  className = "",
  label,
  error
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 text-sm transition-colors pr-12 ${
            error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''
          } ${className}`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50"
          disabled={disabled}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeNoneIcon className="w-5 h-5" />
          ) : (
            <EyeOpenIcon className="w-5 h-5" />
          )}
        </button>
      </div>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
} 