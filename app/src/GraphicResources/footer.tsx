import React from "react";
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t , i18n} = useTranslation();
    const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
      };
  return (
    <footer className="bg-gray-200 dark:bg-zinc-900 text-center py-4">
         <div className="flex items-center justify-end">
            <label htmlFor="language-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 space-x-4">
              {t('footer.language')}
            </label>
            <select
              id="language-select"
              className="mt-1 block max-w-xs pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              onChange={handleChangeLanguage}
              defaultValue={i18n.language}
              
            >
              <option value="en">English</option>
              <option value="ja">日本語</option>
            </select>
          </div>
      <p className="text-gray-700 dark:text-gray-300">© 2024 Ryokugyoku. All rights reserved.</p>
    </footer>
  );
};

export default Footer;