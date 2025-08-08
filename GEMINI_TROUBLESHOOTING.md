# Gemini API Troubleshooting Guide

## 🔍 **Common Error: "models/gemini-pro is not found"**

### **What This Error Means**
```
Error: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent: [404 Not Found] models/gemini-pro is not found for API version v1beta
```

This error occurs when:
1. **API Version Mismatch**: The model name doesn't exist in the current API version
2. **Model Name Changed**: Google has updated model names
3. **API Key Permissions**: Your API key doesn't have access to the specific model

### 🛠️ **How We Fixed It**

#### **1. Updated Model Name**
```typescript
// Before
modelName: 'gemini-pro'

// After  
modelName: 'gemini-1.5-pro'
```

#### **2. Added Fallback Mechanism**
```typescript
// If primary model fails, try fallback
if (modelError.message?.includes('not found')) {
  const fallbackModel = genAI.getGenerativeModel({
    model: 'gemini-pro', // Fallback to original model
    generationConfig: { /* ... */ }
  });
}
```

#### **3. Enhanced Configuration**
```typescript
const geminiModel = genAI.getGenerativeModel({
  model: config.gemini.modelName,
  generationConfig: {
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 2048,
  },
});
```

### 📋 **Available Gemini Models**

#### **Current Models (2024)**
- `gemini-1.5-pro` - Latest stable model (recommended)
- `gemini-1.5-flash` - Faster, more cost-effective
- `gemini-pro` - Legacy model (fallback)

#### **Model Comparison**
| Model | Speed | Cost | Quality | Use Case |
|-------|-------|------|---------|----------|
| `gemini-1.5-pro` | Medium | Medium | High | General purpose |
| `gemini-1.5-flash` | Fast | Low | Good | Quick responses |
| `gemini-pro` | Slow | Low | Good | Legacy compatibility |

### 🔧 **Environment Configuration**

#### **Option 1: Use Default (Recommended)**
```env
GOOGLE_GEMINI_API_KEY=your_api_key_here
# Uses gemini-1.5-pro by default
```

#### **Option 2: Specify Model**
```env
GOOGLE_GEMINI_API_KEY=your_api_key_here
GEMINI_MODEL_NAME=gemini-1.5-flash
```

### 🚨 **Common Issues & Solutions**

#### **Issue 1: "API key not configured"**
**Solution**: Add your API key to `.env.local`
```env
GOOGLE_GEMINI_API_KEY=AIzaSyYourActualKeyHere
```

#### **Issue 2: "Model not found"**
**Solution**: The fallback mechanism will automatically try `gemini-pro`

#### **Issue 3: "Rate limit exceeded"**
**Solution**: Wait a few minutes or upgrade your API quota

### 📊 **API Key Setup**

1. **Get API Key**:
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the key

2. **Configure Environment**:
   ```bash
   # Copy example file
   cp env.example .env.local
   
   # Edit .env.local
   GOOGLE_GEMINI_API_KEY=your_actual_key_here
   ```

3. **Restart Server**:
   ```bash
   npm run dev
   ```

### 🔄 **Testing the Fix**

1. **Check API Status**: Visit `/api/ai/status` to verify configuration
2. **Test AI Playground**: Try generating a response
3. **Check Console**: Look for fallback messages

### 📝 **Debug Information**

#### **Check Current Configuration**
```typescript
// In browser console
fetch('/api/ai/status')
  .then(res => res.json())
  .then(console.log)
```

#### **Test API Key**
```bash
# Test with curl
curl -X POST "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{"contents":[{"parts":[{"text":"Hello"}]}]}'
```

### ✅ **Expected Behavior After Fix**

- ✅ **Primary Model**: Uses `gemini-1.5-pro` by default
- ✅ **Fallback**: Automatically tries `gemini-pro` if primary fails
- ✅ **Error Handling**: Graceful error messages for users
- ✅ **Configuration**: Easy to change models via environment variables

The AI playground should now work correctly with both Gemini and OpenAI models! 