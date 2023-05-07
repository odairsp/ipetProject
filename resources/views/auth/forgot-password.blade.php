<x-guest-layout>
    <x-authentication-card>
        <x-slot name="logo">
            <x-authentication-card-logo />
        </x-slot>

        <div class="mb-4 text-sm text-gray-600">
            {{ __('Esqueceu sua senha? Sem problemas. Basta informar seu e-mail e enviaremos um link de redefinição de senha.') }}
        </div>

        @if (session('status'))
            <div class="mb-4 font-medium text-sm text-green-600">
                {{ session('status') }}
            </div>
        @endif

        <x-validation-errors class="mb-4" />

        <form method="POST" action="{{ route('password.email') }}">
            @csrf

            <div class="block">
                <x-label for="email" value="{{ __('Email') }}" />
                <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
            </div>
            <p style="color: brown">Verificar sua caixa de E-mail após o envio</p>
            <div class="flex items-center justify-end mt-4">
                <x-button>
                    {{ __('Email Link de restaução de senha') }}
                </x-button>
            </div>
        </form>
    </x-authentication-card>
</x-guest-layout>
