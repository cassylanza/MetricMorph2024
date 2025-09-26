# MetricMorph2024

MetricMorph is an iOS (React Native) app for converting swimming and running performance times across various metrics (yards/meters, projections, splits, etc.). This repository holds the code and related artifacts for the CS-355 Software Engineering course project.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running the App](#running-the-app)  
  - [Running Tests](#running-tests)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  
- [Authors](#authors)  

---

## Features

- Convert swimming times between meters and yards.  
- Project track race times across distances (e.g. 1600m → 3200m, etc.).  
- Display splits, effort metrics, and performance projections.  
- Clean UI flows for swim and track conversions.  

---

## Tech Stack

- **Framework**: React Native / JavaScript / TypeScript  
- **Testing**: Jest (unit tests)  
- **Build & Config**: `app.json`, `tsconfig.json`, etc.  

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)  
- npm or yarn  
- React Native CLI / environment setup (for iOS builds)  
- (Optional) Xcode / iOS simulator  

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/MetricMorph2024.git
cd MetricMorph2024

# Install dependencies
npm install
# or
yarn install
```
### Running the app

# Run in development mode
npx react-native start

# In a separate terminal launch the iOS app
npx react-native run-ios

### Running tests

npm test
# or
yarn test

---

## Project Structure

MetricMorph2024/
├── __tests__/                 # Unit / component tests
├── src/ / .js / .tsx files    # App source code and components
├── app.json                   # React Native app configuration
├── tsconfig.json              # TypeScript configuration
├── jest.config.js             # Jest configuration
├── react-native.config.js     # Native linking config
├── README.md                  # This file
└── .gitignore                 # Git ignore file

Key Components/ Modules:

ConversionResults.js, ConvertMeterYardResults.js, EffortResults.js etc. — the logic/UI for various conversion features

Routes.js — app navigation configuration

Icons.tsx — icon assets / wrapper component

---

## 




