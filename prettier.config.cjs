module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'css',
  bracketSameLine: false,
  bracketSpacing: true,
  printWidth: 100,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  endOfLine: 'auto', // EoF 방식, OS별로 처리 방식이 다름
  rangeStart: 0, // 포맷팅을 부분 적용할 파일의 시작 라인 지정
  jsxBracketSameLine: false, // JSX의 마지막 `>`를 다음 줄로 내릴지 여부
  jsxSingleQuote: true, // JSX에 singe 쿼테이션 사용 여부
  requirePragma: false, // 파일 상단에 미리 정의된 주석을 작성하고 Pragma로 포맷팅 사용 여부 지정 (v1.8.0)
  insertPragma: false, // 미리 정의된 @format marker의 사용 여부 (v1.8.0)
};
