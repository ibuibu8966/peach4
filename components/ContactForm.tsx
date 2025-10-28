'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = '件名を入力してください';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'メッセージを入力してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetry = () => {
    setSubmitStatus('idle');
  };

  return (
    <div className="max-w-2xl mx-auto">
      {submitStatus === 'success' ? (
        <div className="business-card p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-brand-500/20 rounded-full flex items-center justify-center border-2 border-brand-500 shadow-neon-blue">
              <svg
                className="w-10 h-10 text-brand-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-brand-500 mb-4 neon-text">送信完了</h3>
          <p className="text-neutral-600 mb-6">
            お問い合わせありがとうございます。
            <br />
            内容を確認の上、担当者よりご連絡させていただきます。
          </p>
          <button
            onClick={handleRetry}
            className="cyber-button"
          >
            新しいメッセージを送信
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="business-card p-8 space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-neutral-600 font-medium mb-2">
              お名前 <span className="text-neon-pink">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-neutral-white border ${
                errors.name ? 'border-neon-pink' : 'border-neutral-200'
              } rounded-lg focus:outline-none focus:border-brand-500 text-cyber-100 transition-all duration-300 focus:shadow-neon-blue`}
              placeholder="山田 太郎"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-neon-pink flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-neutral-600 font-medium mb-2">
              メールアドレス <span className="text-neon-pink">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-neutral-white border ${
                errors.email ? 'border-neon-pink' : 'border-neutral-200'
              } rounded-lg focus:outline-none focus:border-brand-500 text-cyber-100 transition-all duration-300 focus:shadow-neon-blue`}
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-neon-pink flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.email}
              </p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-neutral-600 font-medium mb-2">
              件名 <span className="text-neon-pink">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-neutral-white border ${
                errors.subject ? 'border-neon-pink' : 'border-neutral-200'
              } rounded-lg focus:outline-none focus:border-brand-500 text-cyber-100 transition-all duration-300 focus:shadow-neon-blue`}
              placeholder="お問い合わせ内容"
            />
            {errors.subject && (
              <p className="mt-2 text-sm text-neon-pink flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-neutral-600 font-medium mb-2">
              メッセージ <span className="text-neon-pink">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 bg-neutral-white border ${
                errors.message ? 'border-neon-pink' : 'border-neutral-200'
              } rounded-lg focus:outline-none focus:border-brand-500 text-cyber-100 transition-all duration-300 focus:shadow-neon-blue resize-none`}
              placeholder="お問い合わせ内容を詳しくご記入ください"
            />
            {errors.message && (
              <p className="mt-2 text-sm text-neon-pink flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.message}
              </p>
            )}
          </div>

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="p-4 bg-neon-pink/10 border border-neon-pink rounded-lg">
              <p className="text-neon-pink text-sm flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                送信に失敗しました。もう一度お試しください。
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cyber-button disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  送信中...
                </span>
              ) : (
                '送信する'
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
