// ============================================================
// Catálogo Ownat — Loja B2B Ibernop
// ATENÇÃO: preços aqui são placeholders/exemplo, não são os preços
// reais de distribuidor. Substituir assim que tiveres a lista da Ownat.
// ============================================================

const produtos = [
  // ---------- OWNAT PRIME (cão) ----------
  { id: 1, especie: 'cao', gama: 'Prime', nome: 'Ownat Prime Adult Chicken & Turkey (Cão)', tamanhos: [
    { label: '3kg', preco: 12.50, stock: 20 },
    { label: '7.5kg', preco: 24.90, stock: 20 },
    { label: '14kg', preco: 39.90, stock: 15 },
  ]},
  { id: 2, especie: 'cao', gama: 'Prime', nome: 'Ownat Prime Adult Lamb (Cão)', tamanhos: [
    { label: '3kg', preco: 13.20, stock: 15 },
    { label: '7.5kg', preco: 26.50, stock: 15 },
    { label: '14kg', preco: 42.50, stock: 10 },
  ]},
  { id: 3, especie: 'cao', gama: 'Prime', nome: 'Ownat Prime Mini Adult (Cão)', tamanhos: [
    { label: '3kg', preco: 13.90, stock: 15 },
    { label: '7.5kg', preco: 27.90, stock: 15 },
  ]},
  { id: 4, especie: 'cao', gama: 'Prime', nome: 'Ownat Prime Puppy (Cão)', tamanhos: [
    { label: '3kg', preco: 13.90, stock: 15 },
    { label: '7.5kg', preco: 27.90, stock: 12 },
  ]},

  // ---------- OWNAT PRIME (gato) ----------
  { id: 20, especie: 'gato', gama: 'Prime', nome: 'Ownat Prime Adult Chicken & Turkey (Gato)', tamanhos: [
    { label: '1.5kg', preco: 9.90, stock: 20 },
    { label: '3kg', preco: 17.90, stock: 20 },
    { label: '7.5kg', preco: 36.90, stock: 10 },
  ]},
  { id: 21, especie: 'gato', gama: 'Prime', nome: 'Ownat Prime Sterilized (Gato)', tamanhos: [
    { label: '1.5kg', preco: 10.50, stock: 15 },
    { label: '3kg', preco: 18.90, stock: 15 },
  ]},

  // ---------- OWNAT JUST (cão) ----------
  { id: 40, especie: 'cao', gama: 'Just', nome: 'Ownat Just Grain Free Adult Chicken (Cão)', tamanhos: [
    { label: '3kg', preco: 15.90, stock: 15 },
    { label: '7.5kg', preco: 31.90, stock: 15 },
    { label: '14kg', preco: 49.90, stock: 10 },
  ]},
  { id: 41, especie: 'cao', gama: 'Just', nome: 'Ownat Just Grain Free Adult Salmon (Cão)', tamanhos: [
    { label: '3kg', preco: 16.90, stock: 10 },
    { label: '7.5kg', preco: 33.90, stock: 10 },
  ]},

  // ---------- OWNAT JUST (gato) ----------
  { id: 45, especie: 'gato', gama: 'Just', nome: 'Ownat Just Grain Free Adult Chicken (Gato)', tamanhos: [
    { label: '1.5kg', preco: 12.50, stock: 15 },
    { label: '3kg', preco: 21.90, stock: 15 },
  ]},

  // ---------- OWNAT AUTHOR (cão) ----------
  { id: 60, especie: 'cao', gama: 'Author', nome: 'Ownat Author Grain Free Adult Medium (Cão)', tamanhos: [
    { label: '3kg', preco: 18.90, stock: 10 },
    { label: '14kg', preco: 59.90, stock: 8 },
  ]},
  { id: 61, especie: 'cao', gama: 'Author', nome: 'Ownat Author Grain Free Adult Mini (Cão)', tamanhos: [
    { label: '3kg', preco: 19.90, stock: 8 },
    { label: '7.5kg', preco: 39.90, stock: 8 },
  ]},

  // ---------- OWNAT AUTHOR (gato) ----------
  { id: 65, especie: 'gato', gama: 'Author', nome: 'Ownat Author Grain Free Adult (Gato)', tamanhos: [
    { label: '1.5kg', preco: 14.90, stock: 10 },
    { label: '3kg', preco: 25.90, stock: 8 },
  ]},

  // ---------- OWNAT CLASSIC (cão) ----------
  { id: 80, especie: 'cao', gama: 'Classic', nome: 'Ownat Classic Complet (Cão)', tamanhos: [
    { label: '4kg', preco: 10.90, stock: 25 },
    { label: '15kg', preco: 28.90, stock: 20 },
    { label: '20kg', preco: 35.90, stock: 15 },
  ]},
  { id: 81, especie: 'cao', gama: 'Classic', nome: 'Ownat Classic Puppy (Cão)', tamanhos: [
    { label: '4kg', preco: 11.90, stock: 15 },
    { label: '15kg', preco: 31.90, stock: 12 },
  ]},

  // ---------- OWNAT CLASSIC (gato) ----------
  { id: 85, especie: 'gato', gama: 'Classic', nome: 'Ownat Classic Adult (Gato)', tamanhos: [
    { label: '1.5kg', preco: 7.90, stock: 20 },
    { label: '8kg', preco: 29.90, stock: 15 },
  ]},
];
