# 📸 Profile Photo Setup Guide

## कहाँ Photo डालें (Where to Place Your Photo)

आपकी profile photo को **`public`** folder में रखना है:

```
public/
  ├── profile-photo.jpg  (या .png, .jpeg)
  └── myResume.pdf
```

## Photo की Requirements

1. **File Name**: `profile-photo.jpg` (या `profile-photo.png`)
2. **Location**: `public/profile-photo.jpg`
3. **Recommended Size**: 
   - Minimum: 800x800 pixels
   - Best: 1000x1000 pixels या square format
   - Format: JPG, PNG, or JPEG

## कैसे Add करें

1. अपनी photo को `public` folder में copy करें
2. File का नाम `profile-photo.jpg` रखें (या `profile-photo.png` अगर PNG है)
3. `portfolio-data.json` में path already set है: `"profileImage": "/profile-photo.jpg"`

## Photo कैसी होनी चाहिए

- ✅ **Square format** (1:1 ratio) - सबसे अच्छा दिखेगा
- ✅ **High quality** - Clear और sharp
- ✅ **Professional look** - VIP/premium feel के लिए
- ✅ **Good lighting** - Face clearly visible
- ✅ **Centered face** - Photo के center में

## अगर Photo नहीं है

अगर आप अभी photo नहीं डालना चाहते, तो `portfolio-data.json` में `"profileImage"` line को हटा दें या empty string `""` रखें। तब Developer3D component दिखेगा।

## Example

```
public/
  └── profile-photo.jpg  ← यहाँ रखें
```

Photo automatically Hero section में दिखेगी with premium styling! 🎨✨

