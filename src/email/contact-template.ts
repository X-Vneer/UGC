export const contactTemplate = `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      padding: 20px;
      background-color: #f7f7f7;
    text-align: right;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #eeeeee;
    }
    .section {
      padding: 20px 0;
      border-bottom: 1px solid #eeeeee;
    }
    .section:last-child {
      border-bottom: none;
    }
    h2 {
      color: #333;
    }
    .data-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
    }
    .data-label {
      font-weight: bold;
      color: #555;
    }
    .data-value {
      color: #777;
      padding:0 10px
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>تفاصيل طلب خدمة</h1>
    </div>

    <!-- Personal Data Section -->
    <div class="section">
      <h2>معلومات شخصية</h2>
      <div class="data-row">
        <div class="data-label">الاسم:</div>
        <div class="data-value">{{name}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">الاسم الوظيفي:</div>
        <div class="data-value">{{jobTitle}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">رقم التواصل:</div>
        <div class="data-value">{{phoneNumber}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">الايميل:</div>
        <div class="data-value">{{email}}</div>
      </div>
    </div>

    <!-- Brand Information Section -->
    <div class="section">
      <h2>معلومات العلامة التجارية</h2>
      <div class="data-row">
        <div class="data-label">اسم العلامة التجارية:</div>
        <div class="data-value">{{brandName}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">مجال العلامة التجارية:</div>
        <div class="data-value">{{brandField}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">وصف العلامة التجارية:</div>
        <div class="data-value">{{brandDescription}}</div>
      </div>
    </div>

    <!-- Service Information Section -->
    <div class="section">
      <h2>معلومات الخدمة</h2>
      <div class="data-row">
        <div class="data-label">النوع:</div>
        <div class="data-value">{{videosType}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">نوع الخدمة:</div>
        <div class="data-value">{{serviceType}}</div>
      </div>
    
      <div class="data-row" style="display: {{numberOfVideosDisplay}}">
        <div class="data-label">عدد الفيديوهات:</div>
        <div class="data-value">{{numberOfVideos}}</div>
      </div>
      <div class="data-row" style="display: {{likedVideoDisplay}}">
        <div class="data-label">رابط فيدو اعجب العميل:</div>
        <div class="data-value"><a href="{{likedVideo}}" target="_blank">{{likedVideo}}</a></div>
      </div>
      <div class="data-row">
        <div class="data-label">نوع الفديو:</div>
        <div class="data-value">{{videoType}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">جنس صانع المحتوى:</div>
        <div class="data-value">{{contentCreatorSex}}</div>
      </div>
     
    </div>
  </div>
</body>
</html>

`
export const modelOrder = `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      padding: 20px;
      background-color: #f7f7f7;
         text-align: right;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #eeeeee;
    }
    .section {
      padding: 20px 0;
      border-bottom: 1px solid #eeeeee;
    }
    .section:last-child {
      border-bottom: none;
    }
    h2 {
      color: #333;
    }
    .data-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
    }
    .data-label {
      font-weight: bold;
      color: #555;
    }
    .data-value {
      color: #777;
      padding:0 10px
    }
  </style>
</head>
<body>
 <div class="container">
    <div class="header">
      <h1>تفاصيل طلب خدمة</h1>
    </div>

    <!-- Personal Data Section -->
    <div class="section">
      <h2>معلومات شخصية</h2>
      <div class="data-row">
        <div class="data-label">الاسم:</div>
        <div class="data-value">{{name}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">الاسم الوظيفي:</div>
        <div class="data-value">{{jobTitle}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">رقم التواصل:</div>
        <div class="data-value">{{phoneNumber}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">الايميل:</div>
        <div class="data-value">{{email}}</div>
      </div>
    </div>

    <!-- Brand Information Section -->
    <div class="section">
      <h2>معلومات العلامة التجارية</h2>
      <div class="data-row">
        <div class="data-label">اسم العلامة التجارية:</div>
        <div class="data-value">{{brandName}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">مجال العلامة التجارية:</div>
        <div class="data-value">{{brandField}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">وصف العلامة التجارية:</div>
        <div class="data-value">{{brandDescription}}</div>
      </div>
    </div>

    <!-- Service Information Section -->
    <div class="section">
       <h2>معلومات الخدمة</h2>
      <div class="data-row">
        <div class="data-label">نوع الخدمة:</div>
        <div class="data-value">مودل</div>
      </div>
     
      <div class="data-row" style="display: {{numberOfModulesDisplay}}">
        <div class="data-label">عدد الموديلز المطلوب:</div>
        <div class="data-value">{{numberOfModules}}</div>
      </div>
     
   
     
      <div class="data-row">
        <div class="data-label">جنس الموديل:</div>
        <div class="data-value">{{contentCreatorSex}}</div>
      </div>
      <div class="data-row" style="display: {{modalReservationDisplay}}">
        <div class="data-label">نوع الحجز:</div>
        <div class="data-value">{{modalReservation}}</div>
      </div>
    </div>
  </div>
</body>
</html>

`
