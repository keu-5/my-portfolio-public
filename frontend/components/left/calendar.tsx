"use client";
import { useEffect, useState } from 'react';
import { format, isSameMonth, isSameDay } from 'date-fns';
import { getBlog, BlogData } from '@/api/path';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styles from '@/styles/left/calendar.module.css';

const Calendar = (props: any) => {
    const today = new Date();
    const [month, setMonth] = useState<Date>(today);
    const [selected, setSelected] = useState<Date>();
    const [blogData, setBlogData] = useState<BlogData[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getBlog();
                setBlogData(data);
            } catch (error) {
                console.error('Error fetching work data', error);
            }
        };
        fetchData();
    }, []);

    const handleDayClick = (selectedDate: Date) => {
        //NOTE: idを使って選択ページの遷移
        const selectedDay = format(selectedDate, 'y-MM-dd');
        const targetElement = document.getElementById(`${selectedDay}`);
        if (targetElement) {
            const targetPosition = targetElement.offsetTop; // ターゲット要素の上端の位置を取得
            const offset = 100; // 停止したい高さのオフセット（必要に応じて調整）
    
            window.scrollTo({
                top: targetPosition - offset,
                behavior: 'smooth',
            });       
        }
    };

    const disabledDays = (date: Date) => {
        // 有効化する日付を指定
        const enabledDates = blogData?.map(blog => new Date(blog.date));
        
        // enabledDatesが存在しない場合はすべての日付を無効化する
        if (!enabledDates) {
            return true;
        }
        
        // 指定された日付が有効な場合はfalseを返す（無効化しない）
        return enabledDates.every(enabledDate => !isSameDay(date, enabledDate));
    };

    //選択した日のブログデータを選別、格納
    let footer = (
        <>
            <button className={styles.change}
                disabled={isSameMonth(today, month)}
                onClick={() => setMonth(today)}
            >
                Go to today.
            </button>
        </>
    );

    return (
        <div>
            <DayPicker
                mode="single"
                showOutsideDays
                fixedWeeks
                month={month}
                fromYear={2023}
                toYear={today.getFullYear()}
                selected={selected}
                onSelect={setSelected}
                onMonthChange={setMonth}
                footer={footer}
                disabled={disabledDays}
                onDayClick={handleDayClick}
                //react day pickerのスタイルを変更
                style={{ '--rdp-cell-size': '3vw','--rdp-accent-color': '#0b87e0','marginTop': '100px' , ...props.style }}
            />
        </div>
    );
}

export default Calendar;