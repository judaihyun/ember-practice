

test

테스트 실행 방법
: ember test --server or ember t -s  
( localhost:7357 )

# filter 테스트 
- Button component example
ember test --server --module="Integration | Component | simple-button"

- Run tests for a location service
ember t -s -m="Unit | Service | location

- Button component example
ember test --server --filter="should show icon and label"

- Test everything related to your dashboard
ember t -s -f="Dashboard"

- Run integration tests
ember t -s -f="Integration"


==========================================

Ember에서는 3가지 타입의 test를 제공한다.
- unit test
- rendering test ( known as integration tests)
- application test ( known as acceptance tests)


# Application Tests(Acceptance Test)

- 정의 : visiting the homepage, to authenticating, to navigating, to filling out a form, etc. 그리고 routing test까지 가능.
