# Urdu/Arabic Font Usage Guide

## 🎯 Available Font Classes

### 1. Arabic Text (Quran Style)
```jsx
<p className="arabic-text">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
```
- Font: Scheherazade New
- Size: 1.3rem
- Perfect for Quran verses, Arabic text

### 2. Simple Urdu Text
```jsx
<p className="urdu-text">السلام علیکم ورحمۃ اللہ وبرکاتہ</p>
```
- Font: Noto Nastaliq Urdu
- Size: 1.1rem
- Perfect for Urdu content, duas

### 3. Enhanced Quran Style
```jsx
<p className="font-quran">الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</p>
```
- Font: Scheherazade New
- Size: 1.25rem
- Enhanced spacing for better readability

## 🚀 Quick Examples

### In your components:
```jsx
// For Arabic Quran text
<div className="arabic-text text-green-800">
  وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا
</div>

// For Urdu text
<div className="urdu-text text-blue-800">
  یہ ایک آسان اور صاف اردو فونٹ ہے
</div>

// For enhanced Quran style
<div className="font-quran text-emerald-800">
  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
</div>
```

## ✅ What's Already Updated
- QuranVerse.jsx ✅
- AsmaUlHusna.jsx ✅
- Font classes added to index.css ✅

## 📝 To Use in Other Components
Simply replace old font classes with:
- `arabic-text` for Arabic/Quran text
- `urdu-text` for simple Urdu text
- `font-quran` for enhanced Quran style

## 🎨 Features
- ✅ Right-to-left (RTL) text direction
- ✅ Proper line spacing
- ✅ Clean, readable fonts
- ✅ Responsive sizing
- ✅ Quran-like appearance