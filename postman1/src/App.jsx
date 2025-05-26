import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({ nome: "", email: "", senha: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/salvar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.text();
      alert(result);
    } catch (error) {
      alert("Erro ao enviar os dados!");
    }
  };

  return (
    <div className="container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} required />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
