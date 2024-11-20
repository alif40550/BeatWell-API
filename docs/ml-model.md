# CHD Prediction Model

This is a description of the model

- Endpoint: **menyusul**
- Method: **POST**

## Request Body

```json
{
  "sex": 1, //male
  "age": 45,
  "cigsPerDay": 10, // 10 rokok per hari
  "BPMeds": 0, //tidak menggunakan obat tekanan darah
  "prevalentStroke": 0, //tidak ada riwayat stroke
  "prevalentHyp": 1, //ada riwayat hipertensi
  "diabetes": 1, //ada riwayat diabetes
  "totChol": 250, //kolesterol total 250 mg/dl
  "sysBP": 140, //tekanan darah sistolik 140 mmHg
  "diaBP": 90, //tekanan darah diastolik 90 mmHg
  "BMI": 30.5, //BMI 30.5 kg/m2
  "heartRate": 80, //Denyut jantung 80 bpm
  "glucose": 120 //gula darah 120 mg/dl
}
```

## Response (Success)

```json
{
  "status": 200,
  "body": {
    "message": "Prediction success",
    "error": false,
    "data": {
      "prediction": "0%", //tidak terkena CHD (buat persen sajah)
      "description": "tidak CHD"
    }
  }
}
```

## Response (Error)

```json
{
  "status": 400,
  "body": {
    "message": "Prediction failed",
    "error": true
  }
}
```
