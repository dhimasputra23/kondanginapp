<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

use Illuminate\Auth\Notifications\VerifyEmail;

use Illuminate\Notifications\Messages\MailMessage;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        VerifyEmail::toMailUsing(function ($notifiable, $url) {
            return (new MailMessage)
                ->subject('Verifikasi Email Kamu')
                ->line('Data registrasi kamu telah berhasil kami terima. Verifikasi email kamu dengan mengklik tombol di bawah ini:')
                ->action('Verifikasi Email', $url)
                ->line('Bila ada pertanyaan, silahkan hubungi kami.');

        });

        // Pengaturan email reset password ada di vendor\laravel\framework\src\Illuminate\Auth\Notifications\ResetPassword;

        // ResetPassword::toMailUsing(function ($notifiable, $url) {
        //     return (new MailMessage)
        //         ->subject('Atur Ulang Kata Sandi')
        //         ->line('Permintaan pengaturan ulang kata sandi kamu telah berhasil kami terima. Buat kata sandi baru kamu dengan mengklik tombol di bawah ini:')
        //         ->action('Atur Ulang Kata Sandi', $url)
        //         ->line('Bila ada pertanyaan, silahkan hubungi kami.');

        // });

        //
    }
}
