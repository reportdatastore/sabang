<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2026-Report Dashboard</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary-color: #8B0000;
            --primary-light: #a30000;
            --secondary-color: #3498db;
            --secondary-light: #5dade2;
            --warning-color: #f39c12;
            --danger-color: #e74c3c;
            --success-color: #27ae60;
            --info-color: #2980b9;
            --light-color: #f8f9fa;
            --dark-color: #2c3e50;
            --gray-color: #95a5a6;
            --shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            --shadow-hover: 0 15px 35px rgba(0, 0, 0, 0.12);
            --transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
            --border-radius: 16px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', 'Inter', system-ui, -apple-system, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
            color: var(--dark-color);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            overflow-x: hidden;
        }

        /* Running Text Pop-up Modal */
        .running-text-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(5px);
            z-index: 1003;
            display: none;
            justify-content: center;
            align-items: center;
            animation: fadeIn 0.5s ease;
        }

        .popup-content {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--dark-color) 100%);
            border-radius: var(--border-radius);
            padding: 30px;
            max-width: 800px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
            animation: slideUp 0.4s ease;
            border: 3px solid rgba(255, 255, 255, 0.1);
            position: relative;
        }

        .popup-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        }

        .popup-title {
            font-size: 1.8rem;
            color: white;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .popup-countdown {
            font-size: 1.2rem;
            color: var(--warning-color);
            font-weight: 600;
            font-family: 'Courier New', monospace;
            background: rgba(0, 0, 0, 0.3);
            padding: 5px 15px;
            border-radius: 20px;
            border: 2px solid var(--warning-color);
            animation: countdownPulse 1s infinite;
        }

        .close-popup {
            background: none;
            border: none;
            font-size: 1.8rem;
            color: rgba(255, 255, 255, 0.7);
            cursor: pointer;
            transition: var(--transition);
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }

        .close-popup:hover {
            color: white;
            background: rgba(255, 255, 255, 0.1);
            transform: rotate(90deg);
        }

        .popup-reminders {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 25px;
        }

        .popup-reminder-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: var(--transition);
            backdrop-filter: blur(5px);
        }

        .popup-reminder-item:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateX(10px);
        }

        .popup-reminder-icon {
            font-size: 2rem;
            min-width: 50px;
            text-align: center;
        }

        .popup-reminder-text {
            color: white;
            font-size: 1.1rem;
            font-weight: 500;
            line-height: 1.5;
            flex: 1;
        }

        .popup-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 20px;
            border-top: 2px solid rgba(255, 255, 255, 0.2);
        }

        .popup-timer {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .popup-auto-close {
            color: var(--warning-color);
            font-weight: 600;
        }

        .popup-settings-btn {
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 10px 20px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 500;
            transition: var(--transition);
            display: flex;
            align-items: center;
            gap: 8px;
            backdrop-filter: blur(5px);
        }

        .popup-settings-btn:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: translateY(-3px);
        }

        /* Settings Dropdown Menu (Gear Icon) */
        .settings-dropdown {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1001;
        }

        .settings-toggle {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
            color: white;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            display: none;
            justify-content: center;
            align-items: center;
            box-shadow: var(--shadow);
            transition: var(--transition);
            font-size: 1.5rem;
        }

        .settings-toggle:hover {
            transform: scale(1.1) rotate(30deg);
            box-shadow: var(--shadow-hover);
        }

        .settings-menu {
            position: absolute;
            top: 60px;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: var(--border-radius);
            padding: 15px;
            box-shadow: var(--shadow);
            display: none;
            flex-direction: column;
            gap: 10px;
            min-width: 200px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            z-index: 1002;
            animation: fadeIn 0.3s ease;
        }

        .settings-menu.active {
            display: flex;
        }

        .settings-item {
            padding: 12px 15px;
            background: var(--light-color);
            border: none;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--dark-color);
            text-align: left;
        }

        .settings-item:hover {
            background: var(--secondary-color);
            color: white;
            transform: translateX(-5px);
        }

        .settings-item.logout {
            color: var(--danger-color);
        }

        .settings-item.logout:hover {
            background: var(--danger-color);
            color: white;
        }

        /* Reminder Editor Modal */
        .reminder-editor-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(5px);
            z-index: 1002;
            justify-content: center;
            align-items: center;
            animation: fadeIn 0.3s ease;
        }

        .editor-content {
            background: white;
            border-radius: var(--border-radius);
            padding: 30px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
            animation: slideUp 0.4s ease;
        }

        .editor-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 2px solid var(--light-color);
        }

        .editor-title {
            font-size: 1.5rem;
            color: var(--dark-color);
            font-weight: 700;
        }

        .close-editor {
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--gray-color);
            cursor: pointer;
            transition: var(--transition);
        }

        .close-editor:hover {
            color: var(--danger-color);
            transform: rotate(90deg);
        }

        .reminder-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 25px;
        }

        .reminder-editor-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px;
            background: var(--light-color);
            border-radius: 10px;
            border: 1px solid #e0e0e0;
            transition: var(--transition);
        }

        .reminder-editor-item:hover {
            background: white;
            box-shadow: var(--shadow);
        }

        .reminder-inputs {
            flex: 1;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .reminder-input {
            flex: 1;
            padding: 10px 15px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 0.9rem;
            transition: var(--transition);
        }

        .reminder-input:focus {
            border-color: var(--secondary-color);
            outline: none;
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }

        .reminder-type-select {
            padding: 10px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 0.9rem;
            background: white;
            min-width: 120px;
            cursor: pointer;
        }

        .editor-actions {
            display: flex;
            gap: 15px;
            justify-content: space-between;
            margin-top: 25px;
            padding-top: 20px;
            border-top: 2px solid var(--light-color);
        }

        .editor-btn {
            padding: 12px 25px;
            border: none;
            border-radius: 10px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .save-btn {
            background: linear-gradient(135deg, var(--success-color) 0%, #2ecc71 100%);
            color: white;
            box-shadow: 0 6px 20px rgba(39, 174, 96, 0.3);
        }

        .save-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(39, 174, 96, 0.4);
        }

        .cancel-btn {
            background: var(--light-color);
            color: var(--dark-color);
            border: 2px solid #e0e0e0;
        }

        .cancel-btn:hover {
            background: #f0f0f0;
            transform: translateY(-3px);
        }

        .add-reminder-btn {
            background: linear-gradient(135deg, var(--secondary-color) 0%, var(--secondary-light) 100%);
            color: white;
            box-shadow: 0 6px 20px rgba(52, 152, 219, 0.3);
        }

        .add-reminder-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(52, 152, 219, 0.4);
        }

        .delete-reminder-btn {
            background: none;
            border: none;
            color: var(--danger-color);
            font-size: 1.2rem;
            cursor: pointer;
            padding: 5px;
            border-radius: 5px;
            transition: var(--transition);
        }

        .delete-reminder-btn:hover {
            background: rgba(231, 76, 60, 0.1);
            transform: scale(1.1);
        }

        /* Session Warning Modal (HIDDEN - Session timeout tetap bekerja di background) */
        .session-warning {
            display: none !important;
        }

        /* Login Container */
        .login-container {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            padding: 50px 40px;
            width: 100%;
            max-width: 420px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.2);
            animation: fadeIn 0.6s ease-out;
        }

        .login-logo {
            color: var(--primary-color);
            margin-bottom: 10px;
            font-size: 3.5rem;
        }

        .login-title {
            color: var(--dark-color);
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 5px;
            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .login-subtitle {
            color: var(--gray-color);
            margin-bottom: 40px;
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: 0.5px;
        }

        .login-form {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }

        .input-group {
            position: relative;
        }

        .input-group i {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--gray-color);
            font-size: 1.2rem;
            transition: var(--transition);
            z-index: 2;
        }

        .input-group input {
            width: 100%;
            padding: 18px 20px 18px 55px;
            border: 2px solid #e9ecef;
            border-radius: 12px;
            font-size: 1rem;
            transition: var(--transition);
            background-color: var(--light-color);
            color: var(--dark-color);
            font-weight: 500;
        }

        .input-group input:focus {
            border-color: var(--secondary-color);
            outline: none;
            box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.15);
            background-color: white;
            transform: translateY(-2px);
        }

        .input-group input:focus + i {
            color: var(--secondary-color);
            transform: translateY(-50%) scale(1.1);
        }

        .login-btn {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
            color: white;
            border: none;
            padding: 18px;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            letter-spacing: 0.5px;
            box-shadow: 0 6px 20px rgba(139, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
        }

        .login-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(139, 0, 0, 0.25);
        }

        .login-btn:active {
            transform: translateY(-1px);
        }

        .login-btn::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
            opacity: 0;
            transition: var(--transition);
        }

        .login-btn:hover::after {
            opacity: 1;
        }

        .login-error {
            color: var(--danger-color);
            font-size: 0.9rem;
            margin-top: 5px;
            display: none;
            font-weight: 500;
            animation: shake 0.5s ease-in-out;
        }

        /* Dashboard Container */
        .dashboard-container {
            display: none;
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
            animation: slideUp 0.6s ease-out;
        }

        /* Session Timer Display - HIDDEN */
        .session-timer {
            display: none !important;
        }

        header {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--dark-color) 100%);
            color: white;
            padding: 25px 30px;
            text-align: center;
            margin-bottom: 40px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            position: relative;
            overflow: hidden;
        }

        header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(to right, var(--secondary-color), #f1c40f);
        }

        h1 {
            font-size: 2.4rem;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .welcome-text {
            font-size: 1rem;
            opacity: 0.9;
            font-weight: 400;
        }

        .tabs {
            display: flex;
            justify-content: center;
            margin-bottom: 40px;
            flex-wrap: wrap;
            gap: 12px;
            background: white;
            padding: 15px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
        }

        .tab-btn {
            padding: 14px 28px;
            background: var(--light-color);
            border: none;
            border-radius: 12px;
            cursor: pointer;
            font-weight: 600;
            transition: var(--transition);
            color: var(--dark-color);
            font-size: 0.95rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .tab-btn:hover {
            background: var(--secondary-light);
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(52, 152, 219, 0.2);
        }

        .tab-btn.active {
            background: linear-gradient(135deg, var(--secondary-color) 0%, var(--secondary-light) 100%);
            color: white;
            box-shadow: 0 8px 20px rgba(52, 152, 219, 0.3);
            transform: translateY(-2px);
        }

        .tab-content {
            display: none;
            animation: fadeIn 0.5s ease;
        }

        .tab-content.active {
            display: block;
        }

        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 25px;
        }

        .report-card {
            background: white;
            border-radius: var(--border-radius);
            padding: 30px 25px;
            text-align: center;
            box-shadow: var(--shadow);
            transition: var(--transition);
            cursor: pointer;
            text-decoration: none;
            color: var(--dark-color);
            border: 1px solid rgba(0, 0, 0, 0.05);
            position: relative;
            overflow: hidden;
        }

        .report-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
            transform: scaleX(0);
            transition: var(--transition);
            transform-origin: left;
        }

        .report-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-hover);
        }

        .report-card:hover::before {
            transform: scaleX(1);
        }

        .report-icon {
            font-size: 3rem;
            margin-bottom: 20px;
            transition: var(--transition);
        }

        .report-card:hover .report-icon {
            transform: scale(1.1);
        }

        .report-title {
            font-weight: 600;
            font-size: 1.05rem;
            line-height: 1.4;
            transition: var(--transition);
        }

        .report-card:hover .report-title {
            color: var(--primary-color);
        }

        /* Color classes for reminders */
        .urgent { color: #ff6b6b; }
        .important { color: #feca57; }
        .info { color: #48dbfb; }
        .success { color: #1dd1a1; }
        .warning { color: #ff9ff3; }

        /* Daily Report Colors - ORIGINAL COLORS */
        .daily-1 { color: #e74c3c; }
        .daily-2 { color: #3498db; }
        .daily-3 { color: #2ecc71; }
        .daily-4 { color: #f39c12; }
        .daily-5 { color: #9b59b6; }
        .daily-6 { color: #1abc9c; }
        .daily-7 { color: #d35400; }
        .daily-8 { color: #27ae60; }
        .daily-9 { color: #2980b9; }
        .daily-10 { color: #2980b9; }
        .daily-11 { color: #9b59b6; }
        .daily-12 { color: #27ae60; }
        .daily-13 { color: #2F4F4F; }
        .daily-14 { color: #3498db; }
        .daily-15 { color: #9b59b6; }

        /* Weekly Report Colors */
        .weekly-1 { color: #e67e22; }
        .weekly-2 { color: #16a085; }
        .weekly-3 { color: #c0392b; }
        .weekly-4 { color: #8e44ad; }

        /* Monthly Report Colors */
        .monthly-1 { color: #3498db; }
        .monthly-2 { color: #2ecc71; }
        .monthly-3 { color: #f1c40f; }
        .monthly-4 { color: #e74c3c; }
        .monthly-5 { color: #9b59b6; }
        .monthly-6 { color: #f39c12; }
        .monthly-7 { color: #d35400; }
        .monthly-8 { color: #27ae60; }

        /* Project Report Colors */
        .project-1 { color: #9b59b6; }
        .project-2 { color: #1abc9c; }
        .project-3 { color: #d35400; }
        .project-4 { color: #27ae60; }
        .project-5 { color: #e74c3c; }
        .project-6 { color: #2980b9; }

        /* App Report Colors */
        .app-1 { color: #3498db; }
        .app-2 { color: #2ecc71; }
        .app-3 { color: #e74c3c; }
        .app-4 { color: #f39c12; }
        .app-5 { color: #9b59b6; }
        .app-6 { color: #1abc9c; }
        .app-7 { color: #d35400; }
        .app-8 { color: #2980b9; }
        .app-9 { color: #e74c3c; }
        .app-10 { color: #3498db; }
        .app-11 { color: #2ecc71; }

        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }

        @keyframes countdownPulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .dashboard-grid {
                grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
                gap: 20px;
            }

            .tabs {
                padding: 12px;
                gap: 8px;
            }

            .tab-btn {
                padding: 12px 20px;
                font-size: 0.9rem;
            }

            header {
                padding: 25px 20px;
                text-align: center;
            }

            h1 {
                font-size: 2rem;
            }

            .login-container {
                padding: 40px 25px;
            }

            .login-title {
                font-size: 1.8rem;
            }

            .settings-toggle {
                width: 45px;
                height: 45px;
                font-size: 1.3rem;
            }

            .settings-menu {
                min-width: 180px;
            }

            .popup-content {
                padding: 20px;
            }

            .popup-title {
                font-size: 1.5rem;
            }

            .popup-reminder-item {
                padding: 15px;
                flex-direction: column;
                text-align: center;
            }

            .popup-reminder-icon {
                font-size: 1.5rem;
            }

            .popup-reminder-text {
                font-size: 1rem;
            }

            .popup-footer {
                flex-direction: column;
                gap: 15px;
            }

            .editor-content {
                padding: 20px;
            }

            .reminder-editor-item {
                flex-direction: column;
                gap: 10px;
            }

            .reminder-inputs {
                flex-direction: column;
                width: 100%;
            }

            .reminder-type-select {
                width: 100%;
            }
        }

        @media (max-width: 480px) {
            .dashboard-grid {
                grid-template-columns: 1fr;
            }

            .tab-btn {
                padding: 10px 15px;
                font-size: 0.85rem;
                min-width: 120px;
                justify-content: center;
            }

            .login-logo {
                font-size: 2.8rem;
            }
        }
    </style>
</head>
<body>
    <!-- Running Text Pop-up Modal (Muncul otomatis) -->
    <div class="running-text-popup" id="runningTextPopup">
        <div class="popup-content">
            <div class="popup-header">
                <div class="popup-title">
                    <i class="fas fa-bell"></i> Important Reminders
                    <div class="popup-countdown" id="popupCountdown">60</div>
                </div>
                <button class="close-popup" id="closePopup">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="popup-reminders" id="popupReminders">
                <!-- Reminders will be dynamically added here -->
            </div>
            
            <div class="popup-footer">
                <div class="popup-timer">
                    <i class="fas fa-clock"></i>
                    <span>Auto close in: <span class="popup-auto-close" id="popupAutoClose">20</span> seconds</span>
                </div>
                <button class="popup-settings-btn" id="popupSettingsBtn">
                    <i class="fas fa-cog"></i> Reminder Settings
                </button>
            </div>
        </div>
    </div>

    <!-- Settings Dropdown Menu (Gear Icon) -->
    <div class="settings-dropdown" id="settingsDropdown">
        <button class="settings-toggle" id="settingsToggle">
            <i class="fas fa-cog"></i>
        </button>
        <div class="settings-menu" id="settingsMenu">
            <button class="settings-item" id="editRemindersBtn">
                <i class="fas fa-edit"></i> Edit Reminders
            </button>
            <button class="settings-item" id="showPopupNowBtn">
                <i class="fas fa-bell"></i> Show Reminders Now
            </button>
            <div style="height: 1px; background: #e0e0e0; margin: 5px 0;"></div>
            <button class="settings-item logout" id="logoutBtn">
                <i class="fas fa-sign-out-alt"></i> Logout
            </button>
        </div>
    </div>

    <!-- Reminder Editor Modal -->
    <div class="reminder-editor-modal" id="reminderEditorModal">
        <div class="editor-content">
            <div class="editor-header">
                <h2 class="editor-title">Edit Running Text Reminders</h2>
                <button class="close-editor" id="closeEditor">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="reminder-list" id="reminderEditorList">
                <!-- Reminder items will be dynamically added here -->
            </div>
            
            <div class="editor-actions">
                <button class="editor-btn add-reminder-btn" id="addReminderBtn">
                    <i class="fas fa-plus"></i> Add New Reminder
                </button>
                <div>
                    <button class="editor-btn cancel-btn" id="cancelEditBtn">
                        <i class="fas fa-times"></i> Cancel
                    </button>
                    <button class="editor-btn save-btn" id="saveRemindersBtn">
                        <i class="fas fa-save"></i> Save Changes
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Login Form -->
    <div class="login-container" id="loginContainer">
        <div class="login-logo">
            <i class="fas fa-chart-line"></i>
        </div>
        <h1 class="login-title">Report Dashboard Area 2</h1>
        <p class="login-subtitle">Enter password to access the dashboard</p>
        
        <form class="login-form" id="loginForm">
            <div class="input-group">
                <i class="fas fa-lock"></i>
                <input type="password" id="password" placeholder="Enter password" required autofocus>
            </div>
            
            <button type="submit" class="login-btn">
                <i class="fas fa-sign-in-alt"></i> Access Dashboard
            </button>
            
            <div class="login-error" id="loginError">
                Incorrect password. Please try again.
            </div>
        </form>
        
        <div style="margin-top: 30px; font-size: 0.85rem; color: var(--gray-color);">
            <p><i class="fas fa-info-circle"></i> Update Version: <strong>v 2.126</strong></p>
            <p style="margin-top: 10px; font-size: 0.75rem;">
                <i class="fas fa-shield-alt"></i> Auto logout after 15 minutes of inactivity
            </p>
        </div>
    </div>

    <!-- Dashboard -->
    <div class="dashboard-container" id="dashboardContainer">
        <header>
            <h1>Report Dashboard Store</h1>
            <p class="welcome-text">Access all your reports and analytics in one place</p>
        </header>

        <div class="tabs">
            <button class="tab-btn active" data-tab="daily">
                <i class="fas fa-calendar-day"></i> Daily Report
            </button>
            <button class="tab-btn" data-tab="weekly">
                <i class="fas fa-calendar-week"></i> Weekly Report
            </button>
            <button class="tab-btn" data-tab="monthly">
                <i class="fas fa-calendar-alt"></i> Monthly Report
            </button>
            <button class="tab-btn" data-tab="project">
                <i class="fas fa-project-diagram"></i> Project Report
            </button>
            <button class="tab-btn" data-tab="app">
                <i class="fas fa-th"></i> App Report
            </button>
        </div>

        <!-- Daily Report -->
        <div id="daily" class="tab-content active">
            <div class="dashboard-grid"> 
               
                <a href="selector/select_linebar.html" class="report-card" target="_blank" rel="nofollow">
                    <div class="report-icon daily-1"><i class="fas fa-list-alt"></i></div>
                    <div class="report-title">Line Bar 2026</div>
                </a>  
                
                <a href="select_month_reg2.html" class="report-card" target="_blank" rel="nofollow">
                    <div class="report-icon daily-2"><i class="fas fa-server"></i></div>
                    <div class="report-title">daily 2</div>
                </a>
                
            </div>
        </div>

        <!-- Weekly Report -->
        <div id="weekly" class="tab-content">
            <div class="dashboard-grid">
                <a href="select_weekly.html" class="report-card" target="_blank" rel="nofollow">
                    <div class="report-icon weekly-1"><i class="fas fa-user-plus"></i></div>
                    <div class="report-title">Weekly 1</div>
                </a>
                <a href="select_weekly.html" class="report-card" target="_blank" rel="nofollow">
                    <div class="report-icon weekly-2"><i class="fas fa-user-plus"></i></div>
                    <div class="report-title">Weekly 2</div>
                </a>
                <a href="select_weekly.html" class="report-card" target="_blank" rel="nofollow">
                    <div class="report-icon weekly-2"><i class="fas fa-user-plus"></i></div>
                    <div class="report-title">Weekly 3</div>
                </a>
            </div>
        </div>

        <!-- Monthly Report -->
        <div id="monthly" class="tab-content">
            <div class="dashboard-grid">
                <a href="select_store.html" class="report-card" target="_blank" rel="nofollow">
                    <div class="report-icon monthly-1"><i class="fas fa-database"></i></div>
                    <div class="report-title">monthly 1</div>
                </a> 
                
            </div>
        </div>

        <!-- Project Report -->
        <div id="project" class="tab-content">
            <div class="dashboard-grid">
                <a href="isi link disini" class="report-card" target="_blank" rel="nofollow">
                    <div class="report-icon project-1"><i class="fas fa-trash-restore"></i></div>
                    <div class="report-title">Project 1</div>
                </a>
                
            </div>
        </div>

        <!-- App Report -->
        <div id="app" class="tab-content">
            <div class="dashboard-grid">
                <a href="isi link disini" target="_blank" rel="nofollow">
                    <div class="report-icon app-1"><i class="fas fa-tools"></i></div>
                    <div class="report-title">App</div>
                </a>
                
            </div>
        </div>
    </div>

    <script>
        // Password yang valid - DIUBAH MENJADI 8070
        const VALID_PASSWORD = "8070";
        
        // Session timeout settings (dalam menit)
        const SESSION_TIMEOUT = 45;
        
        // Running text popup settings
        const POPUP_INTERVAL = 10; // Muncul setiap 10 menit (600 detik)
        const POPUP_DURATION = 20; // Durasi popup 1 menit (20 detik)
        
        let sessionTimer;
        let logoutTimer;
        let lastActivityTime;
        
        // Popup timer settings
        let popupTimer;
        let popupCountdownInterval;
        let isPopupVisible = false;
        
        // Reminder data - EDITABLE
        let reminders = JSON.parse(localStorage.getItem('dashboardReminders')) || [
            { 
                text: "⚠️ Deadline DOI/LPB harian update after closing!", 
                icon: "fas fa-calendar-exclamation",
                type: "urgent"
            },
            { 
                text: "📊 Jangan lupa update sales report max jam 09:00", 
                icon: "fas fa-chart-line",
                type: "important"
            },
            { 
                text: "✅ QA Index harus di-isi setiap hari ( cut off hari selasa )", 
                icon: "fas fa-clipboard-check",
                type: "info"
            },
            { 
                text: "🔔 Serah Terima Modal TMS harus di-upload setiap hari ", 
                icon: "fas fa-money-check-alt",
                type: "warning"
            },
            { 
                text: "📋 Monitoring DOI Area 2  diupdate harian", 
                icon: "fas fa-boxes",
                type: "info"
            },
            { 
                text: "🚨 Pest Control report di-isi setiap hari", 
                icon: "fas fa-bug",
                type: "urgent"
            }
        ];

        // Icon mapping for reminder types
        const reminderIcons = {
            "urgent": "fas fa-exclamation-circle",
            "important": "fas fa-exclamation-triangle",
            "info": "fas fa-info-circle",
            "warning": "fas fa-bell",
            "success": "fas fa-check-circle"
        };

        // Cek jika user sudah login sebelumnya
        document.addEventListener('DOMContentLoaded', function() {
            const isLoggedIn = localStorage.getItem('isLoggedIn');
            
            if (isLoggedIn === 'true') {
                showDashboard();
                resetSessionTimer();
                startPopupTimer();
            }
            
            // Setup tab functionality
            setupTabs();
            
            // Auto focus pada input password
            document.getElementById('password').focus();
            
            // Setup event listeners untuk mendeteksi aktivitas
            setupActivityListeners();
            
            // Setup settings dropdown
            setupSettingsDropdown();
            
            // Setup reminder editor
            setupReminderEditor();
            
            // Setup popup controls
            setupPopupControls();
        });

        // Setup tab functionality
        function setupTabs() {
            const tabBtns = document.querySelectorAll('.tab-btn');
            
            tabBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remove active class from all buttons and content
                    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

                    // Add active class to clicked button
                    this.classList.add('active');

                    // Show corresponding content
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                    
                    // Reset timer karena ada aktivitas
                    resetSessionTimer();
                });
            });
        }

        // Setup activity listeners
        function setupActivityListeners() {
            const activityEvents = ['mousemove', 'keypress', 'click', 'scroll', 'touchstart'];
            
            activityEvents.forEach(event => {
                document.addEventListener(event, function() {
                    if (localStorage.getItem('isLoggedIn') === 'true') {
                        resetSessionTimer();
                    }
                });
            });
        }

        // Setup settings dropdown
        function setupSettingsDropdown() {
            const settingsToggle = document.getElementById('settingsToggle');
            const settingsMenu = document.getElementById('settingsMenu');
            
            // Toggle menu
            settingsToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                settingsMenu.classList.toggle('active');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function() {
                settingsMenu.classList.remove('active');
            });
            
            // Prevent menu from closing when clicking inside
            settingsMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
            
            // Setup menu item actions
            document.getElementById('editRemindersBtn').addEventListener('click', openReminderEditor);
            document.getElementById('showPopupNowBtn').addEventListener('click', showPopupNow);
            document.getElementById('logoutBtn').addEventListener('click', performLogout);
        }

        // Setup popup controls
        function setupPopupControls() {
            // Close popup button
            document.getElementById('closePopup').addEventListener('click', closePopup);
            
            // Popup settings button
            document.getElementById('popupSettingsBtn').addEventListener('click', function() {
                closePopup();
                openReminderEditor();
            });
            
            // Close popup when clicking outside
            document.getElementById('runningTextPopup').addEventListener('click', function(event) {
                if (event.target === this) {
                    closePopup();
                }
            });
        }

        // Setup reminder editor
        function setupReminderEditor() {
            // Close editor
            document.getElementById('closeEditor').addEventListener('click', closeReminderEditor);
            document.getElementById('cancelEditBtn').addEventListener('click', closeReminderEditor);
            
            // Save reminders
            document.getElementById('saveRemindersBtn').addEventListener('click', saveReminders);
            
            // Add new reminder
            document.getElementById('addReminderBtn').addEventListener('click', addNewReminder);
            
            // Close modal when clicking outside
            document.getElementById('reminderEditorModal').addEventListener('click', function(event) {
                if (event.target === this) {
                    closeReminderEditor();
                }
            });
        }

        // Start popup timer
        function startPopupTimer() {
            // Clear existing timer
            clearTimeout(popupTimer);
            
            // Schedule first popup immediately (saat login)
            setTimeout(showPopupNow, 1000);
            
            // Schedule recurring popups every 10 minutes
            popupTimer = setInterval(showPopupNow, POPUP_INTERVAL * 60 * 1000);
            
            // Show gear icon
            document.getElementById('settingsToggle').style.display = 'flex';
            
            console.log(`Popup akan muncul setiap ${POPUP_INTERVAL} menit`);
        }

        // Show popup now
        function showPopupNow() {
            if (isPopupVisible) return;
            
            isPopupVisible = true;
            const popup = document.getElementById('runningTextPopup');
            const popupReminders = document.getElementById('popupReminders');
            
            // Clear existing content
            popupReminders.innerHTML = '';
            
            // Add reminders to popup
            reminders.forEach((reminder, index) => {
                const reminderElement = document.createElement('div');
                reminderElement.className = 'popup-reminder-item';
                reminderElement.innerHTML = `
                    <div class="popup-reminder-icon ${reminder.type}">
                        <i class="${reminder.icon}"></i>
                    </div>
                    <div class="popup-reminder-text">${reminder.text}</div>
                `;
                popupReminders.appendChild(reminderElement);
            });
            
            // Show popup
            popup.style.display = 'flex';
            
            // Start countdown
            startPopupCountdown();
        }

        // Start popup countdown
        function startPopupCountdown() {
            let countdown = POPUP_DURATION;
            const countdownElement = document.getElementById('popupCountdown');
            const autoCloseElement = document.getElementById('popupAutoClose');
            
            // Update initial display
            countdownElement.textContent = countdown;
            autoCloseElement.textContent = countdown;
            
            // Start countdown interval
            popupCountdownInterval = setInterval(() => {
                countdown--;
                countdownElement.textContent = countdown;
                autoCloseElement.textContent = countdown;
                
                if (countdown <= 0) {
                    clearInterval(popupCountdownInterval);
                    closePopup();
                }
                
                // Update animation based on remaining time
                if (countdown <= 10) {
                    countdownElement.style.animation = 'pulse 0.5s infinite';
                    countdownElement.style.color = '#ff6b6b';
                }
            }, 1000);
        }

        // Close popup
        function closePopup() {
            clearInterval(popupCountdownInterval);
            document.getElementById('runningTextPopup').style.display = 'none';
            isPopupVisible = false;
            
            // Reset countdown animation
            const countdownElement = document.getElementById('popupCountdown');
            countdownElement.style.animation = '';
            countdownElement.style.color = 'var(--warning-color)';
        }

        // Open reminder editor
        function openReminderEditor() {
            const modal = document.getElementById('reminderEditorModal');
            const list = document.getElementById('reminderEditorList');
            
            // Close settings menu
            document.getElementById('settingsMenu').classList.remove('active');
            
            // Clear existing list
            list.innerHTML = '';
            
            // Add each reminder to editor
            reminders.forEach((reminder, index) => {
                const item = createReminderEditorItem(reminder, index);
                list.appendChild(item);
            });
            
            // Show modal
            modal.style.display = 'flex';
        }

        // Create reminder editor item
        function createReminderEditorItem(reminder, index) {
            const item = document.createElement('div');
            item.className = 'reminder-editor-item';
            item.dataset.index = index;
            
            item.innerHTML = `
                <div class="reminder-inputs">
                    <input type="text" class="reminder-input reminder-text-input" 
                           value="${reminder.text}" placeholder="Reminder text">
                    
                    <select class="reminder-type-select reminder-type-input">
                        <option value="urgent" ${reminder.type === 'urgent' ? 'selected' : ''}>⚠️ Urgent</option>
                        <option value="important" ${reminder.type === 'important' ? 'selected' : ''}>📊 Important</option>
                        <option value="info" ${reminder.type === 'info' ? 'selected' : ''}>✅ Info</option>
                        <option value="warning" ${reminder.type === 'warning' ? 'selected' : ''}>🔔 Warning</option>
                        <option value="success" ${reminder.type === 'success' ? 'selected' : ''}>💡 Success</option>
                    </select>
                </div>
                
                <button class="delete-reminder-btn" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            
            // Add delete event listener
            const deleteBtn = item.querySelector('.delete-reminder-btn');
            deleteBtn.addEventListener('click', function() {
                deleteReminder(index);
            });
            
            return item;
        }

        // Add new reminder
        function addNewReminder() {
            const newReminder = {
                text: "New reminder - click to edit",
                icon: "fas fa-info-circle",
                type: "info"
            };
            
            reminders.push(newReminder);
            
            // Update editor list
            const list = document.getElementById('reminderEditorList');
            const item = createReminderEditorItem(newReminder, reminders.length - 1);
            list.appendChild(item);
            
            // Scroll to new item
            item.scrollIntoView({ behavior: 'smooth' });
            
            // Focus on new input
            const input = item.querySelector('.reminder-text-input');
            input.focus();
            input.select();
        }

        // Delete reminder
        function deleteReminder(index) {
            if (reminders.length <= 1) {
                showNotification("Cannot delete the last reminder", "warning");
                return;
            }
            
            if (confirm("Are you sure you want to delete this reminder?")) {
                reminders.splice(index, 1);
                
                // Update editor list
                const list = document.getElementById('reminderEditorList');
                list.innerHTML = '';
                
                reminders.forEach((reminder, newIndex) => {
                    const item = createReminderEditorItem(reminder, newIndex);
                    list.appendChild(item);
                });
                
                showNotification("Reminder deleted", "success");
            }
        }

        // Save reminders
        function saveReminders() {
            const items = document.querySelectorAll('.reminder-editor-item');
            
            // Update reminders from editor
            const updatedReminders = [];
            
            items.forEach(item => {
                const textInput = item.querySelector('.reminder-text-input');
                const typeInput = item.querySelector('.reminder-type-select');
                
                if (textInput.value.trim() !== "") {
                    updatedReminders.push({
                        text: textInput.value.trim(),
                        icon: reminderIcons[typeInput.value],
                        type: typeInput.value
                    });
                }
            });
            
            // Validate
            if (updatedReminders.length === 0) {
                showNotification("Please add at least one reminder", "warning");
                return;
            }
            
            // Save to local storage
            reminders = updatedReminders;
            localStorage.setItem('dashboardReminders', JSON.stringify(reminders));
            
            // Update popup if visible
            if (isPopupVisible) {
                showPopupNow();
            }
            
            // Close editor
            closeReminderEditor();
            
            showNotification("Reminders saved successfully", "success");
        }

        // Close reminder editor
        function closeReminderEditor() {
            document.getElementById('reminderEditorModal').style.display = 'none';
        }

        // Show notification
        function showNotification(message, type) {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `
                <div style="
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: ${getNotificationColor(type)};
                    color: white;
                    padding: 12px 20px;
                    border-radius: 10px;
                    box-shadow: var(--shadow);
                    z-index: 1000;
                    animation: slideUp 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    max-width: 300px;
                ">
                    <i class="fas fa-${getNotificationIcon(type)}"></i>
                    <span>${message}</span>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Get notification color by type
        function getNotificationColor(type) {
            const colors = {
                'success': '#27ae60',
                'error': '#e74c3c',
                'warning': '#f39c12',
                'info': '#3498db'
            };
            return colors[type] || '#3498db';
        }

        // Get notification icon by type
        function getNotificationIcon(type) {
            const icons = {
                'success': 'check-circle',
                'error': 'exclamation-circle',
                'warning': 'exclamation-triangle',
                'info': 'info-circle'
            };
            return icons[type] || 'info-circle';
        }

        // Login form submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('password').value;
            const errorElement = document.getElementById('loginError');
            
            // Reset error message
            errorElement.style.display = 'none';
            
            // Validate password
            if (password === VALID_PASSWORD) {
                // Simpan status login
                localStorage.setItem('isLoggedIn', 'true');
                
                // Show dashboard dengan animasi
                document.getElementById('loginContainer').style.animation = 'fadeIn 0.4s reverse forwards';
                
                setTimeout(() => {
                    showDashboard();
                    resetSessionTimer();
                    startPopupTimer();
                }, 400);
                
            } else {
                showLoginError(errorElement);
            }
        });

        // Show login error
        function showLoginError(errorElement) {
            errorElement.style.display = 'block';
            // Shake animation for error
            document.getElementById('loginForm').style.animation = 'shake 0.5s';
            setTimeout(() => {
                document.getElementById('loginForm').style.animation = '';
            }, 500);
            
            // Highlight password field
            const passwordInput = document.getElementById('password');
            passwordInput.style.borderColor = '#e74c3c';
            passwordInput.style.boxShadow = '0 0 0 4px rgba(231, 76, 60, 0.15)';
            setTimeout(() => {
                passwordInput.style.borderColor = '';
                passwordInput.style.boxShadow = '';
            }, 2000);
            
            // Clear password field
            passwordInput.value = '';
            passwordInput.focus();
        }

        // Reset session timer
        function resetSessionTimer() {
            // Clear existing timers
            clearTimeout(sessionTimer);
            clearTimeout(logoutTimer);
            
            // Update last activity time
            lastActivityTime = Date.now();
            
            // Start new session timer
            const logoutTimeMs = SESSION_TIMEOUT * 60 * 1000;
            
            // Set logout timer
            logoutTimer = setTimeout(logoutDueToInactivity, logoutTimeMs);
        }

        // Logout due to inactivity
        function logoutDueToInactivity() {
            // Clear popup timers
            clearInterval(popupTimer);
            clearInterval(popupCountdownInterval);
            
            // Clear login status
            localStorage.removeItem('isLoggedIn');
            
            // Hide gear icon
            document.getElementById('settingsToggle').style.display = 'none';
            
            // Close popup if visible
            closePopup();
            
            // Hide dashboard and show login
            document.getElementById('dashboardContainer').style.display = 'none';
            document.getElementById('loginContainer').style.display = 'block';
            
            // Reset form dan fokus
            document.getElementById('loginForm').reset();
            document.getElementById('password').focus();
            
            // Reset animations
            document.getElementById('loginContainer').style.animation = 'fadeIn 0.6s ease-out';
        }

        // Perform logout
        function performLogout() {
            // Clear login status
            localStorage.removeItem('isLoggedIn');
            
            // Clear timers
            clearTimeout(sessionTimer);
            clearTimeout(logoutTimer);
            
            // Clear popup timers
            clearInterval(popupTimer);
            clearInterval(popupCountdownInterval);
            
            // Hide gear icon
            document.getElementById('settingsToggle').style.display = 'none';
            
            // Close popup if visible
            closePopup();
            
            // Close settings menu
            document.getElementById('settingsMenu').classList.remove('active');
            
            // Add logout animation
            document.getElementById('dashboardContainer').style.animation = 'slideUp 0.4s reverse forwards';
            
            setTimeout(() => {
                // Hide dashboard and show login
                document.getElementById('dashboardContainer').style.display = 'none';
                document.getElementById('loginContainer').style.display = 'block';
                
                // Reset form dan fokus
                document.getElementById('loginForm').reset();
                document.getElementById('password').focus();
                
                // Reset animations
                document.getElementById('loginContainer').style.animation = 'fadeIn 0.6s ease-out';
            }, 400);
        }

        // Function to show dashboard
        function showDashboard() {
            // Hide login and show dashboard
            document.getElementById('loginContainer').style.display = 'none';
            document.getElementById('dashboardContainer').style.display = 'block';
            
            // Auto focus pada tab pertama
            document.querySelector('.tab-btn.active').focus();
        }

        // Enter key untuk submit form
        document.getElementById('password').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('loginForm').dispatchEvent(new Event('submit'));
            }
        });
        
        // Hint untuk password (untuk pengembangan)
        console.log('Password untuk login: 8070');
        console.log('Session timeout: ' + SESSION_TIMEOUT + ' menit');
        console.log('Popup muncul setiap: ' + POPUP_INTERVAL + ' menit');
        console.log('Popup durasi: ' + POPUP_DURATION + ' detik');
        console.log('Running text dengan ' + reminders.length + ' reminder');
        console.log('Reminders disimpan di localStorage sebagai "dashboardReminders"');
    </script>
</body>
</html>
