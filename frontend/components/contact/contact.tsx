"use client"
import React, { useState } from 'react';
import styles from "@/styles/contact/contact.module.css"

const API_HOST = 'https://backend.com';

const getCSRFToken = (): string | null => {
    var match;
    if (typeof document !== 'undefined') {
        match = document.cookie.match(/csrftoken=([^;]+)/);
    }
    return match ? match[1] : null;
};
const csrfToken = getCSRFToken();
// HTTPリクエストヘッダーにCSRFトークンを追加
const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'X-CSRFToken': csrfToken || '',
};

const Contact: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [submitStatus, setSubmitStatus] = useState<string | null>(null);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false); 

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
    
        try {
            const response = await fetch(`${API_HOST}/mail/`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ 
                    name,
                    email,
                    message,
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log(data.message);
                setSubmitStatus('フォームの送信に成功しました');

                setName('');
                setEmail('');
                setMessage('');
            } else {
                console.error('Failed to submit the form');
                setSubmitStatus('フォームの送信に失敗しました');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('フォームの送信中にエラーが発生しました');
        } finally {
            setLoading(false); // 成功または失敗に関わらず、ローディングを無効にする
            setShowPopup(true);
        }
    };

    return (
        <>
            {showPopup && (
                <div className={styles.popup}>
                    <div className={styles.content}>
                        <p>{submitStatus}</p>
                        <button className={styles.submit} onClick={() => setShowPopup(false)}>閉じる</button>
                    </div>
                </div>
            )}
            <form className={styles.contact} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                    <div className={styles.formLabel}>
                        <label htmlFor="name">お名前</label>
                        <span>必須</span>
                    </div>
                    <input type="text" title="name"  value={ name } onChange={(e) => setName(e.target.value)} required></input>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formLabel}>
                        <label htmlFor="email">メールアドレス</label>
                        <span>必須</span>
                    </div>
                    <input type="email" title="email" value={ email } onChange={(e) => setEmail(e.target.value)} required></input>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formLabel}>
                        <label htmlFor="message">お問い合わせ内容</label>
                        <span>必須</span>
                    </div>
                    <textarea title="message" rows={5} value={ message } onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>

                <button className={styles.submit} type="submit">
                    {loading ? '送信中...' : '送信'}
                </button>
            </form>
        </>
    );
};

export default Contact;