# GitHub Pages 배포 안내

대상 저장소: [YKEDUTECH/home](https://github.com/YKEDUTECH/home)

## 파일 올리기

이 폴더의 파일과 하위 폴더 전체를 저장소의 루트에 올립니다. GitHub 웹에서 할 경우 저장소의 `Add file` → `Upload files`를 선택해 업로드하고 기본 브랜치 `main`에 커밋합니다. `.github/workflows/pages.yml` 파일도 포함해야 자동 배포됩니다.

기존 `home` 저장소에 파일이 있다면 덮어쓰기 전에 보존할 파일을 확인하세요. 저장소에 `index.html`이 이미 있으면 새 홈페이지와 내용이 충돌할 수 있습니다.

## Pages 설정

1. GitHub 저장소의 `Settings` → `Pages`를 엽니다.
2. `Build and deployment`의 Source를 `GitHub Actions`로 설정합니다.
3. `Actions` 탭에서 `Deploy static site to GitHub Pages` 작업이 완료되는지 확인합니다.
4. 저장소의 Pages 설정에 표시되는 주소로 사이트를 엽니다. 저장소 이름이 `home`이면 보통 `https://ykedutech.github.io/home/` 형식입니다.

기본 브랜치가 `main`이 아니면 `.github/workflows/pages.yml`의 `branches` 값을 실제 기본 브랜치명으로 바꿉니다.

## 사용자 지정 도메인

도메인을 연결할 때는 저장소 `Settings` → `Pages`에서 도메인을 등록하고, 도메인 제공업체의 DNS 설정도 별도로 추가합니다. 도메인이 준비되지 않았다면 GitHub가 제공하는 기본 주소를 사용하면 됩니다.

## 업데이트

파일을 수정한 뒤 `main` 브랜치에 커밋하면 Actions가 사이트를 다시 배포합니다. 배포가 끝난 뒤 브라우저 캐시를 새로고침해 변경 사항을 확인합니다.
