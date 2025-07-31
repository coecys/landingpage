import { useState } from "react";
import { Input, Button, Textarea, Typography } from "@material-tailwind/react";

export default function RegistrationForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); /* llama API o Netlify Functions */ };

  return (
    <section id="registro" className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-lg">
        <Typography variant="h4" className="text-center mb-6">Registro</Typography>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Nombre completo" name="name" value={form.name} onChange={handleChange} required />
          <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
          <Input label="Empresa / Institución" name="company" value={form.company} onChange={handleChange} />
          <Button type="submit" fullWidth>Enviar</Button>
        </form>
      </div>
    </section>
  );
}
