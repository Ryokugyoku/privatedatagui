import React from 'react';
import { useTranslation } from 'react-i18next';

interface AlertPopUpProps {
  message: string;
  onClose: () => void;
}

const AlertPopUp: React.FC<AlertPopUpProps> = ({ message, onClose }) => {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-50 absolute inset-0"></div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative z-10 max-w-sm w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">{t('popup.warningTitle')}</h2>
        </div>
        <div className="flex items-center m-5">
          <img src="/warning.svg" alt="Warning" className="w-6 h-6 m-2" />
          <p className="text-gray-700 dark:text-gray-300">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 m-auto"
        >
          {t('popup.close')}
        </button>
      </div>
    </div>
  );
};

export default AlertPopUp;