- [읽어보기](https://flyburi.com/606)

## Vue를 사용하는 방법

1. Script

    일부만 Vue를 사용할 수 있다. : **프로그래시브 프레임워크**

2. Vue-Cli

## Vue Instance

```java
...
<body>
<div id="app">
    {{ name }}
</div>
<script>
		// 
    new Vue({
        el: "#app",
        data: {
            name: "코지 코더"
        }
    })

		const vue2 = new Vue({
					el: "#app",
	        data: {
	            name: "코지 코더"
	        }
	    });
</script>
</body>
...
```

### data

- 각 Vue 인스턴스는 data 객체에 있는 모든 속성을 프록시 처리 합니다.
    - **같은 데이터 접근 시 서로 공유된다.**
    - **데이터가 변경되면 화면에 다시 렌더링 된다.**

> ❗View Instance를 만들고 나중에 추가한 데이터는 Proxy 처리를 하지 않는다.

- 만약 초기에 데이터가 필요없지만, Proxy처리를 해주고 싶다면 초기값 설정 후 나중에 바꾸는 방식으로~

cf. 변수명이 xx-yy일 경우 'xx-yy'로 묶어줘야 한다.

`<div :class = "{ red : isRed, 'font-bold': isBold }">Hello</div>`

### computed

**캐싱하는 method**

- computed: 캐싱 O
    - 괄호 사용 X
    - 종속 대상 (computed 안에서 사용하는 data) 이/가 변경될 때만 함수를 실행한다.
        - Vue는 vm.reversedMessage가 vm.message에 의존하는 것을 알고 있기 때문에 vm.message가 바뀔 때 vm.reversedMessage에 의존하는 바인딩을 모두 업데이트할 것입니다.
        - 종속 대상이 없을 경우 재실행 / update 되지 않는다.

        ```jsx
        computed: {
          now: function () {
            return Date.now()
          }
        }
        ```

- method: 캐싱 X
    - 괄호 사용 O

```jsx
new Vue({
	computed: {
            reverseMessage() {
               return this.message.split('').reverse().join('')
            }
        }
})
```

### watch

데이터의 변화를 감시할 때 (데이터 변경 발생 시 호출되는 함수)

- 감시하고자 하는 데이터 이름과 같은 이름으로 만든다.
- 변경 전, 변경 후 value 알 수 있다.

```jsx
new Vue({
	data: {
		message: '안녕하세요'
	},
	watch: {
		message (newVal, oldVal) {
			// do something
		}
})
```

- 하지만 watch를 가능한 computed로 사용하는 게 좋다.
    - 일반적으로 선언형 프로그래밍(computed)이 명령형 프로그래밍(watch)보다 코드 반복이 적은 등 우수하다고 평가하는 경향이 있음.

    ```jsx
    watch: {
        firstName: function (val) {
          this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
          this.fullName = this.firstName + ' ' + val
        }
      }

    computed: {
        fullName: function () {
          return this.firstName + ' ' + this.lastName
        }
      }
    ```

## Data Binding

### v-bind:

- data 직접 입력하지 않고, Vue Instance와 Binding할 때
- `:` 으로 생략 可

```java
<input v-bind:value="inputData" />
<input :value="inputData" />

new Vue({
	inputData: "hello",
});
```

### v-model

- 양방향 바인딩
    - input 내용이 바뀌면 Vue instacne의 words data도 바뀐다.

    ```jsx
    <input type="text" v-model="words"/>

    new Vue({
    	words: ""
    });
    ```

- `<input>`, `<selcet>` `<textarea>` 에 제한된다.

## Event

- event 앞에 `v-on:` 을 붙여준다.
    - `@` 으로 대체 가능

    ```jsx
    <button v-on:click="greet">Greet</button>
    ```

- 호출되는 메서드는 바닐라JS처럼 event를 받아온다.

    ```jsx
    new Vue({
    	methods; {
    		greeting: function(event) {
    			// do something
    		}
    	}
    })
    ```

    - event 호출 시 변수 전달 가능 (by `$event`)

        ```jsx
        <button v-on:click="warn('Form cannot be submitted yet.', $event)">
          Submit
        </button>

        // ...
        methods: {
          warn: function (message, event) {
            // 이제 네이티브 이벤트에 액세스 할 수 있습니다
            if (event) event.preventDefault()
            alert(message)
          }
        }
        ```

### 이벤트 수식어

## 조건부 Rendering

### v-if / v-else-if / v-else

`<div v-if="condition"> </div>`

### template

조건에 따라 여러 개 (그룹) rendering 하고 싶을 때

```jsx
<template v-if="condition>
	<div> 1 </div>
	<div> 2 </div>
	<div> 3 </div>
</template>
```

### v-show

if와 마찬가지로 조건에 따라 처리하는 것

- v-if : 조건 안 맞으면 (false) 아예 rendering X, rendering된 코드 상에 존재 X
- v-show: 조건 안 맞으면 (false) display가 안되는 것, 비용이 더 적다.

일반적으로 v-if는 토글 비용이 높고 v-show는 초기 렌더링 비용이 더 높습니다.
매우 자주 바꾸기를 원한다면 v-show를, 런타임 시 조건이 바뀌지 않으면 v-if를 권장합니다. 

- toggle: true, false 값 바뀔 때

## 리스트 Rendering

### v-for

- 원소마다 고유한 key 사용하는 것이 좋다. (필수는 아님)

    ```jsx
    <div v-for="person in people" :key="person.name">
            {{ person.name }} {{ person.age }}
     </div>
    ```

    - 반복되는 DOM 내용이 단순한 경우나 의도적인 성능 향상을 위해 기본 동작에 의존하지 않는 경우를 제외하면, 가능하면 언제나 v-for에 key를 추가하는 것이 좋습니다.
    - key는 Vue가 노드를 식별하는 일반적인 메커니즘이기 때문에 v-for와 특별히 연관되지 않는 다른 용도로도 사용됩니다.
    - 일반적으로 id
    - key로 사용할, 고유한 value 없다면 만들어서 넣어준다.

        `:key="person.name + '-' + person.age"`

    - index 사용 지양
        - 중간에 value가 사라지면 index가 변경된다. ⇒ 고유하지 않음
    - 객체나 배열처럼, 기본 타입(Primitive value)이 아닌 값을 키로 사용해서는 안됩니다. 대신 문자열이나 숫자를 사용하세요.

- value, index 같이 받을 수 있다.

    `v-for="{person, index} in people"`

- 객체의 변수를 순회할 때 사용 可 ~~(List)~~

    `v-for="(value1, value2) in object")`

    - object에 변수 정의한 순서대로 나온다.
- `v-for="n in 10"`

### 배열 변경 감지

## Vue Component

`Vue.component('my-component-name', { /* ... */ })`

Vue Instance에 등록해서 사용한다.

```jsx
new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
```

### 전역 등록

```jsx
Vue.component('my-component-name', {
	// ... options ...
})
```

- 어떤 Vue Instance도 사용할 수 있다.
- (단점) 사용하지 않더라도 최종 빌드에 들어가게 된다.

```jsx
Vue.component('tommy-button', {
        // template 안에는 하나의 tag (=Root Element)로 묶어주어야 한다.
        template: `
	        <div>
	            {{ name }}
	            <button @click="changeName">Click</button>
	        </div>
        `
})
```

```jsx
// 모든 컴포넌트에서 공유, global variable의 효과
// The "data" option should be a function that returns a per-instance value in component definitions.
	data: {
		name: "tommy"
	}

	data() {
		return {
			name: "tommy"
		}
	}
```

## Component 간 통신