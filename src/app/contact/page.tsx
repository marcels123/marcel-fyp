"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
// Import your UI components (adjust paths as needed)
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle submission logic
    console.log("Contact Form Submitted", { name, email, query });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="yourname@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="query">Query</Label>
          <textarea
            id="query"
            placeholder="Type your message here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-3 mt-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
            rows={4}
            required
          ></textarea>
        </div>
        <Button type="submit" className="w-full">
          Contact Us
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
      </div>
    </form>
  );
}
