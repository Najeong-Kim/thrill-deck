// generate-types.ts
import { execSync } from 'child_process';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.OPENAPI_URL;
if (!url) {
  console.error('❌ OPENAPI_URL 환경변수가 설정되어 있지 않습니다.');
  process.exit(1);
}

execSync(`npx openapi-typescript ${url} --output src/types/api.d.ts`, { stdio: 'inherit' });
