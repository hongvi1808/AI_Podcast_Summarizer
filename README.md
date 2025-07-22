## Topic: AI Podcast Summarizer
# 1. The target user
- Podcast editor
- Student
- Content creator

# 2. Monetization
- Free: 5 podcast
- $10-$20/month: Limit 30 podcast
- Patner with podcast platforms

# 3. Plan to build the real version with a team
  - Week 1: Setup backend, frontend project, basic UI, upload to storage
  - Week 2: Integrate Whisper API (for speech-to-text) and GPT (for summarier), store data into own's database
  - Week 3: Improve UI, error handling, loading states
  - Week 4: Deploy, optimzie performance, test

# 4. The essential features of this MVP
- Upload file: User upload audio to supabase storage
- Speech to text: Whisper convert audio to transcript
- Summarizer: GPT summarizes that text
- Display result: Show summary content to user

## FRONTEND
- Project name: ai-summarizer-fe
- Tech stack: Next.js, Material UI, React Query, Axios, Supabase

## BACKEND
- Project name: ai-summarizer-be
- Tech stack: Nest.js, TypeORM, Postgresql, Openai, RESTful API

## Flow summarizer
1. User upload audio file into Supabase storage
2. Client send audio info (include in url, hash file...) to server
3. Server check database whether the hash file exists, if so return
4. Call Whisper API to transcript speech to text
5. Continue summarizing that text using GPT
6. Store transcript and summary into database
7. Return and display result to user

  <img width="1899" height="917" alt="image" src="https://github.com/user-attachments/assets/347bbcc2-2906-4805-818a-cb770a6fbfeb" />

