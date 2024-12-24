import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Footer from '../src/GraphicResources/footer';
import AlertPopUp from '../src/GraphicResources/Popups/AlertPopUp';
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { t } = useTranslation();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // ログイン処理をここに追加
    console.log("Email:", email);
    console.log("Password:", password);
    //APIの生成
    try{
        const apiUrl = `${t('URL')}/api/Login/Login`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: email, password, rememberMe }),
          }).then(res => res.json());
        // レスポンスのステータスコードを取得
        const status = response.status;
        if(!response.success){
            //失敗したときメッセージを表示
            setAlertMessage(t('login.loginError'));
            setShowAlert(true);
        }
    }catch(e){
      console.log(e);
    }
  };


  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-zinc-800">
     <div className="flex flex-col items-center justify-center flex-grow">
        <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-zinc-950 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 ">{t('login.title')}</h2>
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                <label htmlFor="email-address" className="sr-only">
                
                </label>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder={t('login.email')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div>
                <label htmlFor="password" className="sr-only">
                    {t('login.password')}
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder={t('login.password')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-100">
                  {t('login.rememberMe')}
                </label>
              </div>
            </div>
            <div>
                <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                ログイン
                </button>
                
            </div>
            </form>
        </div>
      </div>
      {showAlert && (
        <AlertPopUp message={alertMessage} onClose={() => setShowAlert(false)} />
      )}
      <Footer />
    </div>
  );
}