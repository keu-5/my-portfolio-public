const API_HOST = 'https://backend.com';

// Djangoで提供されるCSRFトークンをCookieから取得する関数
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


export interface BlogData {
    id: number;
    title: string;
    thumbnail: string;
    date: string;
    text: string;
    url: string;
}

export const getBlog = async (): Promise<BlogData[]> => {
    try {
        const res = await fetch(`${API_HOST}/blog/`, {
            method: 'GET',
            headers: headers,
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch blog data (HTTP ${res.status})`);
        }

        return await res.json();
    } catch (error) {
        console.error('Error fetching blog data:', error);
        throw error; // Re-throw the error to be handled by the calling code
    }
};

export interface BlogDataWork {
    id: number;
    title: string;
    thumbnail: string;
    text: string;
    url: string;
}

export const getWork = async (): Promise<BlogDataWork[]> => {
    try {
        const res = await fetch(`${API_HOST}/work/`, {
            method: 'GET',
            headers: headers,
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch work data (HTTP ${res.status})`);
        }

        return await res.json();
    } catch (error) {
        console.error('Error fetching work data:', error);
        throw error; // Re-throw the error to be handled by the calling code
    }
};

export interface Notification {
    title: string;
    date: string;
    category: string;
}

export const getNotification = async (): Promise<Notification[]> => {
    try {
        const res = await fetch(`${API_HOST}/notification/`, {
            method: 'GET',
            headers: headers,
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch notification date (HTTP ${res.status})`);
        }

        return await res.json();
    } catch (error) {
        console.error('Error fetching notification data:', error);
        throw error;
    }
};
