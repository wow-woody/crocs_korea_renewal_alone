backup_unused_styles 폴더 소개

이 폴더는 새로 생성된 SCSS 파일(MainInstagram.scss)로 대체되거나 현재 React(src) 환경에서 직접 사용하지 않는 스타일 파일들을 보관하기 위한 백업입니다.

백업한 파일 목록:
- MainInstagram.css (src/ 경로에 있던 기존 인스타그램 스타일, .scss로 대체됨)
- MainInstagram.module.css (모듈형 사용을 위한 시도 파일로 추정, 현재 import 없음)

원본 위치는 그대로 유지되고 있으며, 삭제되지 않았습니다. 추후 필요 시 비교/복원 용도로 활용하세요.

주의:
- 루트(css/ 폴더) 안의 MainInstagram.css 는 정적 HTML이나 루트 레벨 JSX(MainInstagram.jsx)에서 여전히 참조될 수 있으므로 이동/삭제하지 않았습니다.
- 실제로 사용 중인지 다시 점검하려면 Grep로 import 여부 검색: "MainInstagram.css".

복원 방법:
1) 다시 사용하려면 해당 파일을 src/ 최상위로 복사하고 컴포넌트에서 import 경로를 원래대로 수정하면 됩니다.
2) SCSS를 업데이트하면서 필요한 부분만 변환해 반영 가능.

문의나 추가 정리 요청이 있으면 알려주세요.
 
2025-11-09 변경사항:
- 원본 파일을 backup_unused_styles 폴더로 이동 완료(원래 위치에서 제거됨):
	- src/MainInstagram.css → backup_unused_styles/MainInstagram.css
	- MainInstagram.module.css(프로젝트 루트) → backup_unused_styles/MainInstagram.module.css
	- 루트 css/MainInstagram.css 는 여전히 사용 가능성이 있어 이동하지 않음.
