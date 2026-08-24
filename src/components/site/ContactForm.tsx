import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";
import { serviceOptions, platformOptions, CONTACT_EMAIL } from "./data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const initial = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  service: serviceOptions[0] ?? "",
  platform: platformOptions[0] ?? "",
  message: "",
};

type Values = typeof initial;
type Errors = Partial<Record<keyof Values, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.fullName.trim()) errors.fullName = "This field is required.";
  if (!values.email.trim()) errors.email = "This field is required.";
  else if (!EMAIL_RE.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!values.message.trim()) errors.message = "This field is required.";
  else if (values.message.trim().length < 10)
    errors.message = "Please add a little more detail (at least 10 characters).";
  return errors;
}

const fieldClass =
  "transition-all duration-300 focus-visible:border-brand focus-visible:ring-4 focus-visible:ring-brand/15";

export function ContactForm() {
  const send = useServerFn(submitContact);
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  const set = (key: keyof Values) => (value: string) => {
    setValues((prev) => {
      const next = { ...prev, [key]: value };
      if (touched[key]) setErrors(validate(next));
      return next;
    });
  };

  const blur = (key: keyof Values) => () => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors(validate(values));
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ fullName: true, email: true, message: true });
    if (Object.keys(found).length > 0) return;

    setError(null);
    setStatus("sending");
    try {
      await send({ data: values });
      setStatus("sent");
      setValues(initial);
      setTouched({});
    } catch (err) {
      setStatus("idle");
      setError(
        err instanceof Error && err.message
          ? err.message
          : `Something went wrong. Please email ${CONTACT_EMAIL}.`,
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="card-surface animate-rise flex flex-col items-start gap-4 p-8 hover:!translate-y-0 sm:p-10">
        <span className="grid size-14 place-items-center rounded-2xl bg-brand/12 text-brand [animation:dk-rise_0.6s_var(--ease-premium)_0.1s_both]">
          <Check className="size-7" strokeWidth={3} />
        </span>
        <h3 className="text-2xl font-semibold">Thanks for reaching out.</h3>
        <p className="text-muted-foreground">
          Our team will review your inquiry and get back to you. You can also reach us directly at{" "}
          <a
            className="font-medium text-brand underline-offset-4 hover:underline"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <Button variant="outline" className="rounded-full" onClick={() => setStatus("idle")}>
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-surface p-6 hover:!translate-y-0 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full Name" required error={errors.fullName}>
          <Input
            id="fullName"
            autoComplete="name"
            value={values.fullName}
            onChange={(e) => set("fullName")(e.target.value)}
            onBlur={blur("fullName")}
            aria-invalid={Boolean(errors.fullName)}
            placeholder="Jane Doe"
            className={fieldClass}
          />
        </Field>
        <Field id="email" label="Work Email" required error={errors.email}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email")(e.target.value)}
            onBlur={blur("email")}
            aria-invalid={Boolean(errors.email)}
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </Field>
        <Field id="company" label="Company">
          <Input
            id="company"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => set("company")(e.target.value)}
            placeholder="Company name"
            className={fieldClass}
          />
        </Field>
        <Field id="phone" label="Phone Number">
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => set("phone")(e.target.value)}
            placeholder="+91 00000 00000"
            className={fieldClass}
          />
        </Field>
        <Field id="service" label="Service Required" required>
          <NativeSelect
            id="service"
            value={values.service}
            onChange={set("service")}
            options={serviceOptions}
          />
        </Field>
        <Field id="platform" label="Current Platform" required>
          <NativeSelect
            id="platform"
            value={values.platform}
            onChange={set("platform")}
            options={platformOptions}
          />
        </Field>
        <Field
          id="message"
          label="Message"
          required
          error={errors.message}
          className="sm:col-span-2"
        >
          <Textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={(e) => set("message")(e.target.value)}
            onBlur={blur("message")}
            aria-invalid={Boolean(errors.message)}
            placeholder="Tell us what you're trying to connect, automate or customize."
            className={fieldClass}
          />
        </Field>
      </div>

      {error ? (
        <p role="alert" className="animate-rise mt-4 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" className="rounded-full px-7" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send Inquiry <ArrowRight className="size-4" />
            </>
          )}
        </Button>
        <p className="text-xs text-muted-foreground">
          Your inquiry is delivered to {CONTACT_EMAIL}.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  children,
  className,
  error,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string | undefined;
  error?: string | undefined;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 text-sm font-medium">
        {label}
        {required ? <span className="text-brand"> *</span> : null}
      </Label>
      {children}
      <p
        className={cn(
          "overflow-hidden text-xs text-destructive transition-all duration-300",
          error ? "mt-1.5 max-h-8 opacity-100" : "max-h-0 opacity-0",
        )}
        aria-live="polite"
      >
        {error}
      </p>
    </div>
  );
}

function NativeSelect({
  id,
  value,
  onChange,
  options,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-9 w-full cursor-pointer rounded-md border border-input bg-transparent px-3 py-1 text-base transition-all duration-300 outline-none focus-visible:border-brand focus-visible:ring-4 focus-visible:ring-brand/15 md:text-sm"
    >
      {options.map((option) => (
        <option key={option} value={option} className="bg-popover text-popover-foreground">
          {option}
        </option>
      ))}
    </select>
  );
}
