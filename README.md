
# React-useReducer-UserManagementApp

Reactの`useReducer`と`useContext`を使用して、ユーザー管理機能を実装した練習用アプリです。

## 概要

ユーザー名と年齢を入力してユーザーを追加し、登録されたユーザーの確認・削除・全削除ができます。

ユーザーの状態管理には`useReducer`、コンポーネント間の状態共有には`useContext`を使用しています。

## Features

* ユーザーの追加
* ユーザー名・年齢の入力
* 入力値のバリデーション
* ユーザー一覧の表示
* ユーザーの削除
* ユーザーの全削除
* UUIDによるユーザーIDの生成
* ユーザーが存在しない場合の表示切り替え

## Tech Stack

* React
* TypeScript
* Vite
* useState
* useReducer
* useContext
* Tailwind CSS
* uuid

## Project Structure

```text
src/
├── feature/
│   └── problem4/
│       ├── components/
│       │   ├── AddUser.tsx
│       │   └── UserList.tsx
│       ├── contexts/
│       │   └── UserManagementContext.tsx
│       ├── reducers/
│       │   └── UserManagementReducer.ts
│       └── types/
│           └── UserManagement.ts
├── App.tsx
└── main.tsx
````

## State Management

`UserManagementContext`でユーザーの状態と`dispatch`を共有し、`UserManagementReducer`で状態変更を管理しています。

```text
Component
    ↓
dispatch
    ↓
UserManagementReducer
    ↓
State
    ↓
Component
```

## Actions

ユーザー管理には以下の3つのアクションを使用しています。

* `add`：ユーザーを追加
* `remove`：指定したユーザーを削除
* `clear`：すべてのユーザーを削除

## Input Validation

ユーザー名は`trim()`で前後の空白を除去し、未入力の場合はエラーにします。

年齢は正規表現を使用して数字のみを許可し、`Number()`で`number`型へ変換しています。

```tsx
const trimmedName = name.trim();
const trimmedAge = age.trim();

if (!trimmedName) {
  throw new Error("名前を入力してください");
}

if (!trimmedAge) {
  throw new Error("年齢を入力してください");
}

if (!/^\d*$/.test(trimmedAge)) {
  throw new Error("年齢は数字を入力してください");
}

const numericAge = Number(trimmedAge);
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

ブラウザで表示されたURLにアクセスしてアプリを確認できます。
