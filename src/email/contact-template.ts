export const contactTemplate = `
<!DOCTYPE html>
<html lang="en">
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
      <h1>Order Details</h1>
    </div>

    <!-- Personal Data Section -->
    <div class="section">
      <h2>Personal Data</h2>
      <div class="data-row">
        <div class="data-label">Name:</div>
        <div class="data-value">{{name}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">Job Title:</div>
        <div class="data-value">{{jobTitle}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">Phone Number:</div>
        <div class="data-value">{{phoneNumber}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">Email:</div>
        <div class="data-value">{{email}}</div>
      </div>
    </div>

    <!-- Brand Information Section -->
    <div class="section">
      <h2>Brand Information</h2>
      <div class="data-row">
        <div class="data-label">Brand Name:</div>
        <div class="data-value">{{brandName}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">Brand Field:</div>
        <div class="data-value">{{brandField}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">Brand Description:</div>
        <div class="data-value">{{brandDescription}}</div>
      </div>
    </div>

    <!-- Service Information Section -->
    <div class="section">
      <h2>Service Information</h2>
      <div class="data-row">
        <div class="data-label">Videos Type:</div>
        <div class="data-value">{{videosType}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">Service Type:</div>
        <div class="data-value">{{serviceType}}</div>
      </div>
      <div class="data-row" style="display: {{numberOfModulesDisplay}}">
        <div class="data-label">Number of Modules:</div>
        <div class="data-value">{{numberOfModules}}</div>
      </div>
      <div class="data-row" style="display: {{numberOfVideosDisplay}}">
        <div class="data-label">Number of Videos:</div>
        <div class="data-value">{{numberOfVideos}}</div>
      </div>
      <div class="data-row" style="display: {{likedVideoDisplay}}">
        <div class="data-label">Liked Video:</div>
        <div class="data-value"><a href="{{likedVideo}}" target="_blank">{{likedVideo}}</a></div>
      </div>
      <div class="data-row">
        <div class="data-label">Video Type:</div>
        <div class="data-value">{{videoType}}</div>
      </div>
      <div class="data-row">
        <div class="data-label">Content Creator Sex:</div>
        <div class="data-value">{{contentCreatorSex}}</div>
      </div>
      <div class="data-row" style="display: {{modalReservationDisplay}}">
        <div class="data-label">Modal Reservation:</div>
        <div class="data-value">{{modalReservation}}</div>
      </div>
    </div>
  </div>
</body>
</html>

`
