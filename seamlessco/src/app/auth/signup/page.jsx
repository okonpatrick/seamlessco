"use client";
import AuthForm from '../../context/users/authForm';

export default function SignUp() {
  return <AuthForm isLogin={false} />;
}