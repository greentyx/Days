# Days — Productive Life App 🗓️

App de produtividade com tasks, rotinas e desafio financeiro anual, com login via Firebase.

## 📁 Estrutura do Repositório

```
days-app/
├── index.html          # App principal (HTML + CSS + JS tudo em um arquivo)
├── js/
│   └── firebase-config.js  # Referência das importações Firebase (informativo)
└── README.md
```

---

## 🔥 Como configurar o Firebase

### 1. Crie um projeto no Firebase Console

Acesse [https://console.firebase.google.com](https://console.firebase.google.com) e crie um novo projeto.

### 2. Ative o Authentication

- No menu lateral: **Authentication → Get Started**
- Em **Sign-in method**, ative: **Email/Password**

### 3. Crie o Firestore Database

- No menu lateral: **Firestore Database → Create database**
- Escolha **Start in test mode** (para desenvolvimento)
- Selecione a região mais próxima (ex: `southamerica-east1`)

### 4. Regras do Firestore (recomendadas)

Vá em **Firestore → Rules** e cole:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 5. Pegue as credenciais do seu app

- Vá em **Project Settings (⚙️) → General**
- Role até **Your apps → Add app → Web (</>)**
- Copie o objeto `firebaseConfig`

### 6. Cole no index.html

Abra o `index.html` e procure o trecho:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "days-app-XXXXX.firebaseapp.com",
  ...
};
```

Substitua pelos seus valores reais do Firebase Console.

---

## 🚀 Como usar o app

O `index.html` é um arquivo único — basta abrir no navegador ou hospedar em qualquer servidor estático.

### Opções de hospedagem gratuita:
- **Firebase Hosting**: `firebase deploy`
- **GitHub Pages**: faça push para um repositório público
- **Vercel / Netlify**: arraste o `index.html`

---

## ✨ Funcionalidades

### 🗂️ Tasks
- Criar tarefas com título, categoria e status
- Selecionar dias da semana para cada tarefa
- Marcar como concluída / desfazer
- Filtrar por: Todas / Pendentes / Concluídas
- Excluir tarefas

### 🔄 Rotina
- Criar hábitos/rotinas recorrentes com emoji personalizado
- Selecionar dias específicos da semana
- Definir horário (opcional)
- Calendário semanal mostra os dias com atividades

### 💰 Desafio Financeiro
- O usuário define a meta anual (ex: R$ 2.400)
- O app calcula automaticamente o valor por semana (52 semanas)
- Exibe cada semana em cards clicáveis
- Barra de progresso e total acumulado
- Pode ser resetado a qualquer momento

### 🔐 Login / Autenticação
- Criar conta com nome + e-mail + senha
- Entrar com conta existente
- **Modo visitante**: usa o app sem conta — dados ficam na memória e são perdidos ao fechar
- Os dados do usuário autenticado são sincronizados em tempo real com Firestore

---

## 🗃️ Estrutura de dados no Firestore

```
users/
  {uid}/
    tasks/
      {taskId}: { title, category, status, done, days[], createdAt }
    routines/
      {routineId}: { name, icon, days[], time, createdAt }
    config/
      challenge: { goal, weekValues[], deposits[], createdAt }
```

---

## 🛠️ Stack

- HTML5 + CSS3 (sem frameworks CSS)
- JavaScript Vanilla (ES Modules)
- Firebase v10 (Authentication + Firestore)
- Google Fonts: DM Sans + DM Mono

---

## 📸 Views do App

| View | Descrição |
|------|-----------|
| Dashboard | Visão geral: stats, gráfico semanal, tasks recentes |
| Tasks | Lista completa com filtros e adição de tarefas |
| Rotina | Hábitos recorrentes com calendário semanal |
| Desafio | Configuração e progresso do desafio financeiro anual |
| Configurações | Editar perfil e sair da conta |
