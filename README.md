

# 📧 Bulk Mail Application  

The Bulk Mail Application is a powerful tool designed to help businesses and individuals send multiple emails simultaneously. With its user-friendly interface and efficient backend, this application simplifies bulk email communication.  

---

## 🚀 Features  
- **Bulk Email Sending:** Send personalized emails to multiple recipients at once.  
- **Excel File Integration:** Upload an Excel file containing email addresses for quick processing.  
- **Drag-and-Drop Support:** Easily upload files with a drag-and-drop interface.  
- **Real-Time Email Status:** View the status of each email (Sent/Failed).  
- **Mobile-Responsive Design:** Optimized for desktops, tablets, and mobile devices.  
- **Secure Data Handling:** Email credentials stored securely using MongoDB.  

---

## 🛠️ Technologies Used  
### **Frontend:**  
- **React.js** for building the user interface.  
- **Tailwind CSS** for styling and responsive design.  

### **Backend:**  
- **Node.js** with **Express.js** for API and server-side logic.  
- **Nodemailer** for sending emails.  
- **XLSX Library** for parsing Excel files.  
- **MongoDB** for managing email credentials and user data.  

---

## 🔧 Installation and Setup  

### Prerequisites:  
- Node.js  
- MongoDB  
- An email account (e.g., Gmail)  

### 1. Clone the Repository  
```bash  
git clone https://github.com/Adhibhuvanasandhya/bulkfront.git  
cd bulk-mail  
```  

### 2. Install Dependencies  
#### Backend:  
```bash  
cd backend  
npm install  
```  
#### Frontend:  
```bash  
cd frontend  
npm install  
```  

### 3. Environment Variables  
Create a `.env` file in the backend directory and add:  
```env  
PORT=5000  
DB_URI=your_mongodb_connection_string  
```  

### 4. Start the Application  
#### Backend:  
```bash  
cd backend  
npm start  
```  
#### Frontend:  
```bash  
cd frontend  
npm start  
```  

---

## 📄 How to Use  
1. Visit the application frontend.  
2. Enter the email message in the provided text area.  
3. Upload an Excel file containing email addresses.  
4. Click **Send** to process and send emails to all recipients.  
5. Check the real-time email status displayed on the screen.  

---

## 📌 Key Features in Action  
- **Uploading Files:** Drag-and-drop or select an Excel file (.xlsx).  
- **Processing Emails:** The backend reads the file, extracts email addresses, and sends emails via Nodemailer.  
- **Status Feedback:** Shows success or failure for each recipient in real-time.  

---

## 🎯 Future Enhancements  
- Add email scheduling for delayed sends.  
- Support more file formats like CSV.  
- Enable email template customization.  
- Introduce user authentication for enhanced security.  

---

## 🌟 Show Your Support  
If you found this project helpful, feel free to star ⭐ the repository and share your feedback!  

---

## 📝 License  
This project is licensed under the MIT License.  

---  
